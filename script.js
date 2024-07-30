//  navbar
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.nav-toggle .toggle-btn');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.sidebar .close-btn');
    const navItems = document.querySelectorAll('.sidebar .nav-item');

    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('show');
    });

    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('show');
    });

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Close all dropdowns
            navItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove('active');
                }
            });
            // Toggle the current item's dropdown
            item.classList.toggle('active');
        });
    });
});

// 
const ctx = document.getElementById('projectBudgetChart').getContext('2d');

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
        {
            label: 'Total Budget',
            data: [200, 300, 250, 400, 350, 300, 450, 400, 350, 500],
            borderColor: '#4e73df',
            backgroundColor: 'rgba(78, 115, 223, 0.1)',
            fill: false,
            borderWidth: 2,
        },
        {
            label: 'Amount Used',
            data: [150, 200, 180, 320, 300, 280, 400, 370, 330, 450],
            borderColor: '#d1d3e2',
            backgroundColor: 'rgba(209, 211, 226, 0.1)',
            fill: false,
            borderDash: [5, 5],
            borderWidth: 2,
        }
    ]
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            beginAtZero: true,
            grid: {
                display: false,
            }
        },
        y: {
            beginAtZero: true,
            grid: {
                color: 'rgba(200, 200, 200, 0.2)',
            }
        }
    }
};

const projectBudgetChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});