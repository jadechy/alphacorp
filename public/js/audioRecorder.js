document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementById("startRecording");
    const stopBtn = document.getElementById("stopRecording");
    const audioPlayer = document.getElementById("audioPlayer");
    const scoreResult = document.getElementById("scoreResult");
    let mediaRecorder;
    let audioChunks = [];

    startBtn.addEventListener("click", async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = [];

        mediaRecorder.ondataavailable = event => {
            audioChunks.push(event.data);
        };

        mediaRecorder.onstop = async () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });

            const audioUrl = URL.createObjectURL(audioBlob);
            audioPlayer.src = audioUrl;
            audioPlayer.load(); 

            audioPlayer.play(); 

            const formData = new FormData();
            formData.append("audio", audioBlob);

            try {
                const response = await fetch("/scream/analyze-audio", {
                    method: "POST",
                    body: formData
                });

                if (!response.ok) {
                    throw new Error('Erreur du serveur');
                }

                const result = await response.json();
                scoreResult.innerText = "🔥 Score Alpha : " + result.score;
            } catch (error) {
                console.error('Erreur lors de l\'envoi de l\'audio :', error);
                scoreResult.innerText = "Une erreur s'est produite. Veuillez réessayer.";
            }
        };

        mediaRecorder.start();
        startBtn.disabled = true;
        stopBtn.disabled = false;
    });

    stopBtn.addEventListener("click", () => {
        mediaRecorder.stop();
        startBtn.disabled = false; 
        stopBtn.disabled = true;
    });
});
