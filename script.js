'use strict';

const info = document.querySelector('.info');
const contact = document.querySelector('.contact');
const btnSubmit = document.querySelector('.btn-primary');
const form = document.querySelector('#form-email');
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const jobInfo = document.querySelectorAll('.job-info');
const infoButton = document.querySelectorAll('.view-more');
const viewButton = document.querySelectorAll('.view-button');

info.classList.add('hide');
contact.classList.add('hide');
for (const inf of jobInfo) {
  inf.classList.add('hide');
}
for (const v of viewButton) {
  v.classList.add('hide');
}

btnSubmit.addEventListener('click', function () {
  const email = document.querySelector('#exampleInputEmail1').value;
  console.log(email);
  if (regex.test(email)) {
    form.classList.add('hide');
    info.classList.remove('hide');
    contact.classList.remove('hide');
  } else {
    alert('Định dạng email không hợp lệ!');
  }
});
// 🔽🔼
infoButton.forEach(inf => {
  inf.addEventListener('mouseover', function () {
    // console.log(inf.childNodes[7]);
    inf.childNodes[7].classList.remove('hide');
  });
  inf.addEventListener('mouseout', function () {
    // console.log(inf.childNodes[7]);
    inf.childNodes[7].classList.add('hide');
  });

  inf.addEventListener('click', function handleClick(event) {
    if (inf.childNodes[1].textContent === 'Sở thích') {
      inf.childNodes[5].childNodes[1].classList.toggle('hide');
      inf.childNodes[5].childNodes[3].classList.toggle('hide');
      inf.childNodes[5].childNodes[5].classList.toggle('hide');
      inf.childNodes[5].childNodes[7].classList.toggle('hide');
      if (inf.childNodes[5].childNodes[1].classList.contains('hide')) {
        inf.childNodes[7].textContent = '🔽 VIEW MORE';
      } else {
        inf.childNodes[7].textContent = '🔼 VIEW LESS';
      }
    } else {
      inf.childNodes[5].classList.toggle('hide');
      if (inf.childNodes[5].classList.contains('hide')) {
        inf.childNodes[7].textContent = '🔽 VIEW MORE';
      } else {
        inf.childNodes[7].textContent = '🔼 VIEW LESS';
      }
    }
  });
});
