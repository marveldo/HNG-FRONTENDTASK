const dayp = document.getElementById('dayp')
const timep = document.getElementById('timep')
const currentdate = new Date()
const day = currentdate.getDay()
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const currentday = daysOfWeek[day]
dayp.innerHTML = currentday

const intervalid = setInterval(()=> {
    const oneHourInMilliseconds = 3600 * 1000
    const currentime= new Date().getTime() + oneHourInMilliseconds
    const currentdate = new Date(currentime)
    const utctimestring = currentdate.toUTCString()
    timep.innerHTML = utctimestring.slice(17,26)

    return () => clearInterval(intervalid)
}, 1000)
