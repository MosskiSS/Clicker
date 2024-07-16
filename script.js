document.addEventListener('DOMContentLoaded', () => {
    const coin = document.getElementById('coin');
    const counterDisplay = document.getElementById('counter');
    const energyBar = document.getElementById('energy');
    let counter = 0;
    let energy = 500;
    const maxEnergy = 500;
    const energyRecoveryRate = 1; // Восстановление 1 энергии
    const recoveryInterval = 3000; // Интервал восстановления 3 секунды

    function updateCounter() {
        counterDisplay.textContent = `Монет: ${counter}`;
    }

    function updateEnergy() {
        energyBar.style.width = `${(energy / maxEnergy) * 100}%`;
    }

    function recoverEnergy() {
        if (energy < maxEnergy) {
            energy += energyRecoveryRate;
            if (energy > maxEnergy) {
                energy = maxEnergy;
            }
            updateEnergy();
        }
    }

    coin.addEventListener('click', () => {
        if (energy > 0) {
            counter++;
            energy--;
            updateCounter();
            updateEnergy();
        }
    });

    // Восстановление энергии каждую секунду
    setInterval(recoverEnergy, recoveryInterval);

    updateCounter();
    updateEnergy();
});