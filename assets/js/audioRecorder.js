document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.getElementById("startRecording");
  const stopBtn = document.getElementById("stopRecording");
  const scoreResult = document.getElementById("scoreResult");
  const levelResult = document.getElementById("levelResult");
  let mediaRecorder;
  let audioChunks = [];

  let isRecording = false;

  startBtn.addEventListener("click", async () => {
    if (isRecording) return;
    isRecording = true;
    startBtn.classList.add("hidden");
    stopBtn.classList.remove("hidden");
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);
    audioChunks = [];

    mediaRecorder.ondataavailable = (event) => {
      audioChunks.push(event.data);
    };

    mediaRecorder.onstop = async () => {
      isRecording = false;

      const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
      const formData = new FormData();
      formData.append("audio", audioBlob);
      startBtn.classList.remove("hidden");
      stopBtn.classList.add("hidden");
      try {
        const response = await fetch("/scream/analyze-audio", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Erreur du serveur");
        }

        const result = await response.json();
        scoreResult.classList.remove("hidden");
        levelResult.classList.remove("hidden");
        scoreResult.innerText = "🔥 Score Alpha : " + result.score;
        levelResult.innerText = "Niveau : " + result.level;
      } catch (error) {
        console.error("Erreur lors de l'envoi de l'audio :", error);
        scoreResult.innerText =
          "Une erreur s'est produite. Veuillez réessayer.";
      }
    };

    mediaRecorder.start();

    startBtn.disabled = true;
    stopBtn.disabled = false;
  });

  stopBtn.addEventListener("click", () => {
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();
      startBtn.disabled = false;
      stopBtn.disabled = true;
    }
  });
});
