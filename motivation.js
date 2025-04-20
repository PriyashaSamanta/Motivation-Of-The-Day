const motivationalQuotes = [
    '"Believe in yourself and you will be unstoppable."',
    '"Opportunities don\'t happen, you create them."',
    '"Success usually comes to those who are too busy to be looking for it."',
    '"The best way to predict your future is to create it."',
    '"Hardships often prepare ordinary people for an extraordinary destiny."',
    '"Perseverance is not a long race; it’s many short races one after the other."',
    '"Life is 10% what happens to us and 90% how we react to it."',
    '"Every accomplishment starts with the decision to try."',
    '"If you’re going through hell, keep going."',
    '"Your dreams don’t work unless you do."',
    '"The best view comes after the hardest climb."',
    '"When you feel like quitting, think about why you started."',
    '"If it doesn’t challenge you, it won’t change you."',
    '"Great things take time. Be patient."',
    '"Don’t count the days, make the days count."',
    '"Worry less, do more."',
    '"Be so good they can’t ignore you."',
    '"Nothing worth having comes easy."',
    '"You don’t have to be perfect to be amazing."',
    '"You are braver than you believe, stronger than you seem, and smarter than you think."',
    '"Let your faith be bigger than your fear."',
    '"The harder the battle, the sweeter the victory."',
    '"Be fearless in the pursuit of what sets your soul on fire."',
    '"Success is the sum of small efforts repeated day in and day out."',
    '"Create the life you can\'t wait to wake up to."',
    '"Work hard in silence, let your success be your noise."',
    '"If people are doubting how far you can go, go so far that you can’t hear them anymore."',
    '"Every day is a second chance."',
    '"It always seems impossible until it’s done."',
    '"Stop doubting yourself, work hard, and make it happen."',
    '"Success starts with self-discipline."',
    '"Make it happen. Shock everyone."',
    '"Do it with passion or not at all."',
    '"You don’t find will power, you create it."',
    '"Strive for progress, not perfection."',
    '"Your vibe attracts your tribe."',
    '"Your potential is endless."',
    '"Think big, start small, act now."',
    '"Consistency is what transforms average into excellence."',
    '"Keep going, everything you need will come to you at the perfect time."',
    '"The comeback is always stronger than the setback."',
    '"Energy and persistence conquer all things."',
    '"Don’t limit yourself. Many people limit themselves to what they think they can do."',
    '"The secret of getting ahead is getting started."',
    '"Only those who dare to fail greatly can ever achieve greatly."',
    '"What seems to us as bitter trials are often blessings in disguise."',
    '"If you want something you’ve never had, you must be willing to do something you’ve never done."',
    '"Act as if what you do makes a difference. It does."',
    '"You are stronger than you think and braver than you feel."'
  ];
  
  let len=motivationalQuotes.length;
  
  let button = document.querySelector('button');
  button.addEventListener('click',function(){
    let value = Math.floor((Math.random()*len));
    document.querySelector('h1').innerHTML = motivationalQuotes[value];

  });