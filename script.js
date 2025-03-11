const flame=document.getElementById("flame");

navigator.mediaDevices.getUserMedia({audio:true;}).then((stream)=>{
  const audioContext=new AudioContext();
  const analyser=audioContext.createAnalyser();
  const microphone=audioContext.createMediaStreamSource(stream);microphone.connect(analyser);
  
  analyser.fftSize=256;
  const bufferLength=analysser.frequencyBinCount;
  const dataArrat=new uint8Array(bufferLength);
  
  function detectBlow(){
    analyser.getByteFrequencyData(dataArray);
    let maxVolume=Math.max(...dataArray);
    If (maxVolume>100){
      flame.style.display="none";
      alert("yayyyyy");
    }
    requestAnimationFrame(detectBlow);
  }
  detectBlow();
});
document.querySelector(".flame".addEventListener("click",function(){
  this.style.display="none";
});
