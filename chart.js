const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');
const ctx3 = document.getElementById('myChart3');
const ctx4 = document.getElementById('myChart4');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Pelé (Brasil)', 'Just Fontaine (França)', 'Gerd Müller (Alemanha)', 'Ronaldo Fenômeno (Brasil)', 'Miroslav Klose (Alemanha)'],
    datasets: [{
      label: 'Gols',
      data: [12, 13, 14, 15, 16],
      borderWidth: 1
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Maiores artilheiros da historia ',
        font: {
          size: 20,
          family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
        }


      },

    },


  }
});



new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Inglaterra', 'França/Uruguai', 'Argentina', 'Alemanha e Itália', 'Brasil'],
    datasets: [{
      label: 'Titulos',
      data: [1, 2, 3, 4, 5],
      borderWidth: 1,
      backgroundColor: 'white'
    }]
  },
  options: {
    indexAxis: 'y',
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Seleções com mais copas do mundo',
        font: {
          size: 20,
          family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
        }

      }
    },
    layout: {
      padding: {



      }
    }

  }
});

new Chart(ctx3, {
  type: 'bar',
  data: {
    labels: ['Pelé (Brasil) ', 'Cristiano Ronaldo (Portugal)', 'Lothar Matthäus (Alemanha)', 'Diego Maradona (Argentina)', 'Lionel Messi (Argentina)'],
    datasets: [{
      label: 'Assistências',
      data: [8, 8, 8, 8, 9],
      borderWidth: 1,
      backgroundColor: 'orange'
    }]
  },
  options: {
    indexAxis: 'y',
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Maiores assistentes',
        font: {
          size: 20,
          family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
        }

      }
    },
  }
});

new Chart(ctx4, {
  type: 'bar',
  data: {
    labels: ['Gianluigi Buffon (Itália) ', 'Cristiano Ronaldo (Portugal)', 'Leo Messi (Argentina)', 'Cafu (Brasil)', 'Lothar Matthäus (Alemanha)'],
    datasets: [{
      label: 'Jogos',
      data: [22, 22, 23, 24, 25],
      borderWidth: 1,
      backgroundColor: 'purple'
    }]
  },
  options: {
    indexAxis: 'y',
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Jogadores com mais jogos disputados',
        font: {
          size: 20,
          family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
        }

      }
    },
  }
});



