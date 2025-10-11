const imageUpload = document.getElementById('imageUpload');
const preview = document.getElementById('preview');
const camera = document.getElementById('camera');
const captureBtn = document.getElementById('captureBtn');
const analyzeBtn = document.getElementById('analyzeBtn');
const statusMessage = document.getElementById('statusMessage');
const result = document.getElementById('result');
const recommendationSection = document.getElementById('recommendationSection');
let stream;

imageUpload.addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      preview.src = evt.target.result;
      preview.style.display = 'block';
      camera.style.display = 'none';
      captureBtn.disabled = true;
      analyzeBtn.disabled = false;
      statusMessage.textContent = 'Image uploaded. Ready to analyze.';
    };
    reader.readAsDataURL(file);
  }
});

function openCamera() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(s) {
      stream = s;
      camera.srcObject = stream;
      camera.style.display = 'block';
      preview.style.display = 'none';
      captureBtn.disabled = false;
      analyzeBtn.disabled = true;
    });
}

function capturePhoto() {
  const canvas = document.createElement('canvas');
  canvas.width = camera.videoWidth;
  canvas.height = camera.videoHeight;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(camera, 0, 0);
  const dataURL = canvas.toDataURL();
  preview.src = dataURL;
  preview.style.display = 'block';
  camera.style.display = 'none';
  analyzeBtn.disabled = false;
  captureBtn.disabled = true;
  stream.getTracks().forEach(track => track.stop());
  statusMessage.textContent = 'Photo captured. Ready to analyze.';
}

function analyzeSkin() {
  statusMessage.textContent = 'Analyzing...';
  result.innerHTML = '';
  recommendationSection.style.display = 'block';
  setTimeout(() => {
    result.innerHTML = `
      <div class="product-card">
        <img src="https://devanzay.com/cdn/shop/files/WhatsAppImage2025-02-21at10.38.13AM_2.jpg?v=1740333487&width=823" alt="Acne Face Wash">
        <div class="product-info">
          <h3>D’prone Acne Face Wash</h3>
          <p>Targets acne, excess oil and breakouts. Recommended based on detected acne levels.</p>
          <a href="https://devanzay.com/products/devanzay-dprone-acne-clearing-face-wash-healthy-and-clear-skin" target="_blank">View Product</a>
        </div>
      </div>`;
    statusMessage.textContent = 'Analysis complete. See below.';
  }, 2000);
}