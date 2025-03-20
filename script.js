document.getElementById('speakButton').addEventListener
(
    'click', function() {
        if (!('speechSynthesis' in window)) {
            alert('このブラウザでは音声合成機能がサポートされていません。');
            return;
        }

        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const timeText = `現在時刻は、${hours}時${minutes}分${seconds}秒です。`;

        const utterThis = new SpeechSynthesisUtterance(timeText);
        utterThis.lang = 'ja-JP';
        window.speechSynthesis.speak(utterThis);
    }
);
