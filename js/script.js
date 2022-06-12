//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


document.querySelector('button').addEventListener('click', getImage)
document.querySelector('img').style.display = 'none';
document.querySelector('iframe').style.display = 'none';
let key = 'rxN79q21PLf3hrlofnEDJ7fRbDuFAFIdZ3pqcV6f';

function getTodaysImage(){
    let date = new Date();
    let today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`; //In JS months are 0 indexed
    const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${today}`;
    fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
            console.log(data);
            if(data.code == '404' || data.code == '400'){
                document.querySelector('#name').innerHTML = `No data available for date: ${today}`;
                document.querySelector('#desc').style.display = 'block';
                document.querySelector('#descHead').innerHTML = 'The picture is not there yet, check again later.';
                document.querySelector('#desc').innerHTML = `
                <h2>You can checkout my other projects till then.</h2> <br> <br> <br>
            <a href="https://rahulkarda.netlify.app">NFT Portal</a> <br> <br>
            <a href="https://rahulkarda.netlify.app">Portfolio Site</a> <br> <br>
            <a href="https://webpostman.netlify.app">Web Postman</a> <br> <br>
            <a href="https://trackmyip.netlify.app">IP Address Tracker</a> <br> <br>
            <a href="https://speech2text.netlify.app">Speech Recognition</a> <br> <br>
            <a href="https://text2speeches.netlify.app">Speech Synthesis</a> <br> <br>`;
            document.querySelector('img').style.display = 'none';
            document.querySelector('iframe').style.display = 'none';
            }else{
                if(data.media_type === 'image'){
                    document.querySelector('img').style.display = 'block';
                    document.querySelector('img').src = data.hdurl;
                    document.querySelector('iframe').style.display = 'none';
                }
                else{
                    document.querySelector('iframe').style.display = 'block';
                    document.querySelector('iframe').src = data.url;
                    document.querySelector('img').style.display = 'none';
                }
                document.querySelector('#date').innerHTML = data.date.split("-").reverse().join("-");
                document.querySelector('#name').innerHTML = data.title;
                document.querySelector('#desc').style.display = 'block';
                document.querySelector('#desc').innerHTML = data.explanation;
       }})
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// document.querySelector('#name').style.display = 'none';
// document.querySelector('#desc').style.display = 'none';
function getImage(){

    let choice = document.querySelector('input').value.toLocaleLowerCase();
    const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${choice}`;
    fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
          console.log(data);
          if(data.code == '404' || data.code == '400'){
            document.querySelector('#name').innerHTML = `No data available for date: ${choice}`;
            document.querySelector('#desc').style.display = 'block';
            document.querySelector('#descHead').innerHTML = 'The data is not available for that date, check again later.';
            document.querySelector('#desc').innerHTML = `
            <h2>You can checkout my other projects till then.</h2>
            <a href="https://rahulkarda.netlify.app">NFT Portal</a> <br> <br>
            <a href="https://rahulkarda.netlify.app">Portfolio Site</a> <br> <br>
            <a href="https://webpostman.netlify.app">Web Postman</a> <br> <br>
            <a href="https://trackmyip.netlify.app">IP Address Tracker</a> <br> <br>
            <a href="https://speech2text.netlify.app">Speech Recognition</a> <br> <br>
            <a href="https://text2speeches.netlify.app">Speech Synthesis</a> <br> <br>`;
            document.querySelector('img').style.display = 'none';
            document.querySelector('iframe').style.display = 'none';
        }else{
            document.querySelector('#descHead').innerHTML = 'Description';
            if(data.media_type === 'image'){
                document.querySelector('img').style.display = 'block';
                document.querySelector('img').src = data.hdurl;
                document.querySelector('iframe').style.display = 'none';
            }
            else{
                document.querySelector('iframe').style.display = 'block';
                document.querySelector('iframe').src = data.url;
                document.querySelector('img').style.display = 'none';
            }
            document.querySelector('#date').innerHTML = data.date.split("-").reverse().join("-");
            document.querySelector('#name').innerHTML = data.title;
            document.querySelector('#desc').style.display = 'block';
            document.querySelector('#desc').innerHTML = data.explanation;
        } })
        .catch(err => {
          console.log(`error ${err}`)
      });
}
getTodaysImage(); 
