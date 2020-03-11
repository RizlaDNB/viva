var pointer2010 = document.querySelector('.pointer--2010'),
    pointer2011 = document.querySelector('.pointer--2011'),
    pointer2012 = document.querySelector('.pointer--2012'),
    pointer2016 = document.querySelector('.pointer--2016'),
    pointer2018 = document.querySelector('.pointer--2018'),
    pointer2020 = document.querySelector('.pointer--2020'),
    pointer2021 = document.querySelector('.pointer--2021'),
    line = document.querySelector('.slider-line');




    
pointer2010.addEventListener('click', function(evt){
    pointer2010.classList.add('pointer--active');
    pointer2011.classList.remove('pointer--active');
    pointer2012.classList.remove('pointer--active');
    pointer2016.classList.remove('pointer--active');
    pointer2018.classList.remove('pointer--active');
    pointer2020.classList.remove('pointer--active');
    pointer2021.classList.remove('pointer--active');
    line.style.width = "11.15%";
});

pointer2011.addEventListener('click', function(evt){
    pointer2010.classList.add('pointer--active');
    pointer2011.classList.add('pointer--active');
    pointer2012.classList.remove('pointer--active');
    pointer2016.classList.remove('pointer--active');
    pointer2018.classList.remove('pointer--active');
    pointer2020.classList.remove('pointer--active');
    pointer2021.classList.remove('pointer--active');
    line.style.width = "19.56%";
});

pointer2012.addEventListener('click', function(evt){
    pointer2010.classList.add('pointer--active');
    pointer2011.classList.add('pointer--active');
    pointer2012.classList.add('pointer--active');
    pointer2016.classList.remove('pointer--active');
    pointer2018.classList.remove('pointer--active');
    pointer2020.classList.remove('pointer--active');
    pointer2021.classList.remove('pointer--active');
    line.style.width = "28.27%";
});

pointer2016.addEventListener('click', function(evt){
    pointer2010.classList.add('pointer--active');
    pointer2011.classList.add('pointer--active');
    pointer2012.classList.add('pointer--active');
    pointer2016.classList.add('pointer--active');
    pointer2018.classList.remove('pointer--active');
    pointer2020.classList.remove('pointer--active');
    pointer2021.classList.remove('pointer--active');
    line.style.width = "60.17%";
});

pointer2018.addEventListener('click', function(evt){
    pointer2010.classList.add('pointer--active');
    pointer2011.classList.add('pointer--active');
    pointer2012.classList.add('pointer--active');
    pointer2016.classList.add('pointer--active');
    pointer2018.classList.add('pointer--active');
    pointer2020.classList.remove('pointer--active');
    pointer2021.classList.remove('pointer--active');
    line.style.width = "77.98%";
});

pointer2020.addEventListener('click', function(evt){
    pointer2010.classList.add('pointer--active');
    pointer2011.classList.add('pointer--active');
    pointer2012.classList.add('pointer--active');
    pointer2016.classList.add('pointer--active');
    pointer2018.classList.add('pointer--active');
    pointer2020.classList.add('pointer--active');
    pointer2021.classList.remove('pointer--active');
    line.style.width = "90.41%";
});

pointer2021.addEventListener('click', function(evt){
    pointer2010.classList.add('pointer--active');
    pointer2011.classList.add('pointer--active');
    pointer2012.classList.add('pointer--active');
    pointer2016.classList.add('pointer--active');
    pointer2018.classList.add('pointer--active');
    pointer2020.classList.add('pointer--active');
    pointer2021.classList.add('pointer--active');
    line.style.width = "96.96%";
});