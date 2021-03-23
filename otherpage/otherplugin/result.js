const synth = window.speechSynthesis;

const speak = (msg) => {
  let u = new SpeechSynthesisUtterance();
  u.text = msg;

  synth.speak(u);
};


const speakGoogle = (msg) => {
  let u = new SpeechSynthesisUtterance();
  u.text = "第十八際  小涅槃經作證  一切恩愛有離別 一切山巖有崩缺  一切樹木有摧折 一切江河有枯竭  一切萬物有破壞 子母恩情有離別  法身常住無生死 法身常住永不滅  諸形無常生滅法 諸相有滅身安樂  如來亦是住人公 永斷生死無量樂  髮毛爪齒牙疼苦 耳多淚涕唾苦難當";
  let voices = synth.getVoices();
  /*
    "Google US English"
    "Google 日本語"
    "Google 普通话（中国大陆）"
    "Google 粤語（香港）"
    "Google 國語（臺灣）"
    */
  for (let index = 0; index < voices.length; index++) {
    if (voices[index].name == "Google 國語（臺灣）") {
      u.voice = voices[index];
      break;
    } else {
      u.lang = "zh-TW";
    }
  }
  synth.speak(u);
};
/* speak("測試一二三"); */
