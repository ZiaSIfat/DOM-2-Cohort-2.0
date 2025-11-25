
const quotes = [
  { quote: "Believe you can and you're halfway there." },
  { quote: "Success is not final, failure is not fatal." },
  { quote: "Dream big and dare to fail." },
  { quote: "Do what you can with what you have." },
  { quote: "Act as if what you do makes a difference." },
  { quote: "Turn your wounds into wisdom." },
  { quote: "Wherever you go, go with all your heart." },
  { quote: "Happiness depends upon ourselves." },
  { quote: "What you think, you become." },
  { quote: "You are enough just as you are." },

  { quote: "Everything you can imagine is real." },
  { quote: "Well done is better than well said." },
  { quote: "The best revenge is massive success." },
  { quote: "Doubt kills more dreams than failure ever will." },
  { quote: "Stay hungry, stay foolish." },
  { quote: "The harder you work, the luckier you get." },
  { quote: "Don’t wait. The time will never be just right." },
  { quote: "Everything has beauty, but not everyone sees it." },
  { quote: "If you want to be happy, be." },
  { quote: "Be yourself; everyone else is already taken." },

  { quote: "Joy is the simplest form of gratitude." },
  { quote: "Stars can’t shine without darkness." },
  { quote: "Learning never exhausts the mind." },
  { quote: "Dream without fear. Love without limits." },
  { quote: "Change the world by being yourself." },
  { quote: "Every moment is a fresh beginning." },
  { quote: "Whatever you are, be a good one." },
  { quote: "Hope is a waking dream." },
  { quote: "Nothing will work unless you do." },
  { quote: "Make each day your masterpiece." },

  { quote: "Turn your face to the sun and the shadows fall behind you." },
  { quote: "You miss 100% of the shots you don’t take." },
  { quote: "Everything you want is on the other side of fear." },
  { quote: "Every strike brings me closer to the next home run." },
  { quote: "When nothing goes right, go left." },
  { quote: "The best way out is always through." },
  { quote: "If opportunity doesn’t knock, build a door." },
  { quote: "Life is short. Smile while you still have teeth." },
  { quote: "A smooth sea never made a skilled sailor." },
  { quote: "You are stronger than you think." },

  { quote: "To be the best, you must be able to handle the worst." },
  { quote: "Keep going. Everything you need will come at the perfect time." },
  { quote: "Great things never came from comfort zones." },
  { quote: "Work hard in silence. Let success make the noise." },
  { quote: "Your only limit is your mind." },
  { quote: "Difficult roads lead to beautiful destinations." },
  { quote: "Strive for progress, not perfection." },
  { quote: "The best view comes after the hardest climb." },
  { quote: "Don’t stop until you’re proud." },
  { quote: "Small steps every day." },

  { quote: "Choose kindness and laugh often." },
  { quote: "Your vibe attracts your tribe." },
  { quote: "What we think, we become." },
  { quote: "Try again. Fail again. Fail better." },
  { quote: "Live the moment." },
  { quote: "Let the beauty of what you love be what you do." },
  { quote: "Be the change." },
  { quote: "Judge less. Love more." },
  { quote: "Chaos is a friend of mine." },
  { quote: "Do something today your future self will thank you for." },

  { quote: "Your life is as good as your mindset." },
  { quote: "Don’t stop dreaming." },
  { quote: "Purpose fuels passion." },
  { quote: "Take the risk or lose the chance." },
  { quote: "The secret to getting ahead is getting started." },
  { quote: "Life is tough, but so are you." },
  { quote: "Stars need darkness to shine." },
  { quote: "Everything is figureoutable." },
  { quote: "Be fearless." },
  { quote: "Failures are lessons in disguise." },

  { quote: "Your dreams don’t work unless you do." },
  { quote: "Progress, not perfection." },
  { quote: "Think less. Live more." },
  { quote: "Better an oops than a what if." },
  { quote: "Enjoy the little things." },
  { quote: "Life begins at the end of your comfort zone." },
  { quote: "Create your own sunshine." },
  { quote: "You matter." },
  { quote: "Never regret being kind." },
  { quote: "Stay positive, work hard, make it happen." },

  { quote: "Believe in yourself." },
  { quote: "Don’t quit. You’re closer than you think." },
  { quote: "Live simply, dream big." },
  { quote: "One day or day one — you decide." },
  { quote: "Push yourself, no one else will do it for you." },
  { quote: "Courage is grace under pressure." },
  { quote: "If you can dream it, you can do it." },
  { quote: "You are your only limit." },
  { quote: "Life is what you make it." },
  { quote: "Focus on the good." },

  { quote: "Smile. It confuses people." },
  { quote: "Impossible is just an opinion." },
  { quote: "Rise above the storm." },
  { quote: "Never stop exploring." },
  { quote: "Be brave enough to be bad at something new." },
  { quote: "Consistency creates miracles." },
  { quote: "Do less with more focus." },
  { quote: "You glow differently when you believe in yourself." },
  { quote: "Kindness is free. Sprinkle it everywhere." },
  { quote: "Today is yours. Own it." }
];


let main = document.querySelector('main')
let btn = document.querySelector('button')


btn.addEventListener('click', ()=>{

    

    let x = Math.floor(Math.random()*quotes.length)
    let y = Math.floor(Math.random()*quotes.length)
    let r = Math.floor(Math.random()*360)
    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)

    let quote = quotes[x].quote

    let h1 = document.createElement('h1')
    h1.innerText = quote
    h1.style.position = 'absolute'
    h1.style.left = x+'%'
    h1.style.top = y+'%'
    h1.style.rotate = r+'deg'
    h1.style.color = `rgb(${c1},${c2},${c3})`
    main.appendChild(h1)
})