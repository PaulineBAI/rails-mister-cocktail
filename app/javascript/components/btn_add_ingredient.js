const initAddIngredient = () => {
  const btn = document.getElementById('add-ingredient');
  const form = document.getElementById('new_dose');
  btn.addEventListener('click', (event) => {
    form.classList.toggle('d-none');
  });
}

export { initAddIngredient };
