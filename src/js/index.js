let currentStep = 1;
const steps = document.querySelectorAll('.step');
const stepIndicators = document.querySelectorAll('.step-indicator');

function showStep(step) {
  steps.forEach(s => s.classList.add('hidden'));
  document
    .querySelector(`.step[data-step="${step}"]`)
    .classList.remove('hidden');

  stepIndicators.forEach(i => {
    i.classList.remove('text-red');
    if (parseInt(i.dataset.step) === step) i.classList.add('text-red');
  });
}

document.querySelectorAll('.next-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep < steps.length) {
      currentStep++;
      showStep(currentStep);
    }
  });
});

document.querySelectorAll('.prev-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep--;
      showStep(currentStep);
    }
  });
});

document.querySelector('.submit-btn')?.addEventListener('click', e => {
  e.preventDefault();
  currentStep++;
  showStep(currentStep); // Show thank you step
});

// Initial display
showStep(currentStep);
