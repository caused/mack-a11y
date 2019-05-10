var host = document.getElementById('progressbar-unbounded');
var progressBar = host.querySelector('progress');
progressBar.classList.add('deque-hidden');

var unboundedProgressBar = deque.createProgressBar(progressBar, {bounded: false});
unboundedProgressBar.id = 'unboundedProgressBar';
unboundedProgressBar.setAttribute(
  'aria-label',
  'An unbounded progress bar which will run like this forever.'
);

var startButton = host.querySelector('#start-progressbar');
startButton.addEventListener('click', function() {
  unboundedProgressBar.classList.add('deque-progressbar');
  unboundedProgressBar.classList.add('deque-progressbar-unbounded');
  unboundedProgressBar.classList.remove('deque-hidden');
  unboundedProgressBar.setAttribute('aria-busy', 'true');
});

var stopButton = host.querySelector('#stop-progressbar');
stopButton.addEventListener('click', function() {
  unboundedProgressBar.classList.remove('deque-progressbar');
  unboundedProgressBar.classList.remove('deque-progressbar-unbounded');
  unboundedProgressBar.classList.add('deque-hidden');
  unboundedProgressBar.setAttribute('aria-busy', 'false');
});