
const buses = {
    gmv: [  
            {weekends: false, time:'06:00'},{weekends: false,  time:'06:20'}, 
            {weekends: true, time:'06:40'},{weekends: true, time:'07:00'},
            {weekends: false, time:'07:30'},{weekends: true, time:'07:50'}, 
            {weekends: true, time:'08:30'},{weekends: false, time:'08:50'},
            {weekends: true,  time:'09:10'},{weekends: true, time:'09:30'},
            {weekends: false, time:'10:00'},{weekends: true, time:'10:30'},
            {weekends: true, time:'11:00'},{weekends: false,  time:'11:20'},
            {weekends: true, time:'11:40'},{weekends: true, time:'12:30'},
            {weekends: false, time:'13:00'},{weekends: true, time:'13:30'},
            {weekends: true, time:'14:00'},{weekends: false,  time:'14:30'},
            {weekends: true, time:'14:50'},{weekends: true, time:'15:35'}, 
            {weekends: false, time:'15:50'},{weekends: true, time:'16:30'},
            {weekends: true,  time:'17:00'},{weekends: true, time:'17:30'},
            {weekends: false, time:'18:00'},{weekends: true, time:'18:30'},
            {weekends: false, time:'18:50'},{weekends: true, time:'19:10'},
            {weekends: true, time:'19:40'},{weekends: true, time:'20:30'},
            {weekends: true, time:'21:00'},{weekends: false, time:'21:30'},
            {weekends: true, time:'22:00'},{weekends: true, time:'22:35'}, 
    ],
    perm: [ {weekends: true, time:'06:05'},{weekends: false, time:'06:30'}, 
            {weekends: true, time:'06:50'},{weekends: true, time:'07:25'},
            {weekends: false, time:'07:45'},{weekends: true, time:'08:05'}, 
            {weekends: true, time:'08:20'},{weekends: false, time:'08:50'},
            {weekends: true, time:'09:10'},{weekends: true, time:'09:40'},
            {weekends: false, time:'10:00'},{weekends: true, time:'10:20'},
            {weekends: true, time:'11:30'},{weekends: false,  time:'12:00'},
            {weekends: true, time:'12:30'},{weekends: true, time:'13:05'},
            {weekends: false, time:'13:30'},{weekends: true, time:'13:45'},
            {weekends: true, time:'14:20'},{weekends: false,  time:'14:50'},
            {weekends: true, time:'15:20'},{weekends: true, time:'15:55'}, 
            {weekends: true, time:'16:30'},{weekends: false, time:'16:50'},
            {weekends: true, time:'17:10'},{weekends: false, time:'17:30'},
            {weekends: true, time:'17:50'},{weekends: true, time:'18:20'},
            {weekends: true, time:'19:00'},{weekends: false, time:'19:25'},
            {weekends: true, time:'19:45'},{weekends: false, time:'20:00'},
            {weekends: true, time:'20:30'},{weekends: true, time:'21:20'},
                         {weekends: true, time:'21:50'}, 
    ]
}
  
    const weekends = new Date().getDay() === 6 || new Date().getDate() === 0 //make info a weekends now or not
    const time = new Date().toLocaleTimeString('ru-ru', {hour: '2-digit', minute:'2-digit'}) // make rn time
    document.querySelector('#weekends').checked = weekends
    let direction = document.querySelector('.nav')
    direction.addEventListener('change', function(){
            // clear the work appart after change direction
        let clear = document.querySelector('.times')
        clear.innerText = ''
            // place for info about direction
        let inputs = document.querySelectorAll('input[type="radio"]')
        let checked = ''
            // what's was taked from click at direction 
        inputs.forEach(elem => {
            if(elem.checked){
                checked = elem.value 
            }
        })
        
        let weekendsCheck = document.querySelector('input[type="checkbox"]')
            // creating times at page from arr
        buses[checked].forEach(elem => {
            let span = document.createElement('span')
            span.insertAdjacentHTML('beforeend', span)
            span.innerText = elem.time
                //disable time if he don't ridin' at weekends
            if(weekendsCheck.checked){  
                if(elem.weekends === false){
                    span.classList.add('passive')
                    span.classList.toggle('active')
                }
            }
            span.classList.toggle('active')
            document.querySelector('.times').appendChild(span)
         })        
            // change color if next bus is next, lmao
        let timesNodes = []
        document.querySelector('.times').querySelectorAll('span.active').forEach(elem => {
            timesNodes.push(elem)

        })
        timesNodes.find(elem => elem.innerText > time).classList.add('next')
        
    })
    
    let weekendsCheck = document.querySelector('input[type="checkbox"]')
            // creating times at page from arr
        buses.perm.forEach(elem => {
            let span = document.createElement('span')
            span.insertAdjacentHTML('beforeend', span)
            span.innerText = elem.time
                //disable time if he don't ridin' at weekends
            if(weekendsCheck.checked){  
                if(elem.weekends === false){
                    span.classList.add('passive')
                    span.classList.toggle('active')
                }
            }
            span.classList.toggle('active')
            document.querySelector('.times').appendChild(span)
         })        
         let timesNodes = []
        document.querySelector('.times').querySelectorAll('span.active').forEach(elem => {
            timesNodes.push(elem)

        })
        timesNodes.find(elem => elem.innerText > time).classList.add('next')