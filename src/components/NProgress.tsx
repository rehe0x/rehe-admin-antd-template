import NProgress from 'nprogress';
import '@/styles/nprogress.css';

NProgress.configure({
  minimum: 0.1,
  easing: 'ease',
  speed: 400,
  // trickle: true,
  showSpinner: false,
  // parent: '#root'
});

export default NProgress;
