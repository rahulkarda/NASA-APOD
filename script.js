//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('img').style.display = 'none';
document.querySelector('iframe').style.display = 'none';
var key = SECRET_API_KEY;
// document.querySelector('#name').style.display = 'none';
// document.querySelector('#desc').style.display = 'none';

function getFetch(){
  const choice = document.querySelector('input').value.toLocaleLowerCase()
  const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
          console.log(data);
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
        ;
        document.querySelector('#name').innerHTML = data.title;
        document.querySelector('#desc').style.display = 'block';
        document.querySelector('#desc').innerHTML = data.explanation;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

