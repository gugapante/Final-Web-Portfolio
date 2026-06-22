// SCROLL BAR

window.onscroll = function () { scrollBar() };

function scrollBar()
{
    var winScroll = document.bodyscrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

// Creating functions that will toggle the menu when the icon is pressed
// And close them when a link is pressed

const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const menuLinks = document.querySelectorAll('.off-screen-menu a');

function toggleMenu()
{
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
}

function closeMenu()
{
    hamMenu.classList.remove('active');
    offScreenMenu.classList.remove('active');
}

// Open CV File

function downloadFile()
{
    window.open("Assets/Files/CV- John Doe - New.pdf")
}

// Project View Button depending on which project it is on

function viewBtn(project)
{
    if (project === 'project1')
    {
        window.open('project1.html');
    } else if (project === 'project2')
    {
        window.open('project2.html');
    } else if (project === 'project3')
    {
        window.open('project3.html');
    }
}

// Track mouse position

const cursor = document.getElementById('custom-cursor');

document.addEventListener('mousemove', function (e)
{
    var x = e.clientX;
    var y = e.clientY;

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
});

// Hover animation for when the cursor goes over a link tag and button 

var hoverElements = document.querySelectorAll('a, button, input[type="submit"]');

hoverElements.forEach(function (element)
{
    element.addEventListener('mouseenter', function ()
    {
        cursor.style.width = '50px';
        cursor.style.height = '50px';
        cursor.style.border = '3px dashed #FFFFFF';
    });

    element.addEventListener('mouseleave', function ()
    {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.border = '3px solid #FFFFFF';
    });
});

// Fucntions to scroll left and right when button is clicked in the projects section

const carousel = document.getElementById('carousel');
const slides = document.getElementsByClassName('slide');
const prevBtn = document.getElementById('leftBtn');
const nextBtn = document.getElementById('rightBtn');

const slideWidth = slides[0].clientWidth;

prevBtn.addEventListener('click', () =>
{
    carousel.scrollLeft -= slideWidth;
});

nextBtn.addEventListener('click', () =>
{
    carousel.scrollLeft += slideWidth;
});

// FORM SUBMISSION FROM WEEK 8 LECTURE

window.addEventListener("load", function ()
{
    var form = document.querySelector('#contact-form')
    form.addEventListener('submit', sendMessage);

    // Add JavaScript to reset the form
    var reset_success = document.querySelector('#reset_success');
    reset_success.addEventListener("click", reset);

    var reset_error = this.document.querySelector('#reset_error');
    reset_error.addEventListener("click", reset);
});

function sendMessage(event)
{
    event.preventDefault();
    // Get Values
    var email = document.querySelector('#user-email').value.trim();
    var subject = document.querySelector('#user-subject').value.trim();
    var message = document.querySelector('#user-message').value.trim();

    // Get handles for hint messages
    var hint_email = document.querySelector('#hint_email');
    var hint_subject = document.querySelector('#hint_subject');
    var hint_message = document.querySelector('#hint_message');

    // Adding the code that checks the form values\
    var fields_ok = true;

    if (email.length < 5 || email.indexOf('@') < 0)
    {
        hint_email.style.display = 'inline';
        fields_ok = false;
    } else
    {
        hint_email.style.display = 'none';
    }

    if (subject.length === 0)
    {
        hint_subject.style.display = 'inline';
        fields_ok = false;
    } else
    {
        hint_subject.style.display = 'none';
    }

    if (message.length === 0)
    {
        hint_message.style.display = 'inline';
        fields_ok = false;
    } else
    {
        hint_message.style.display = 'none';
    }

    // The next block is only executed if all the input fields are okay
    if (fields_ok)
    {
        // hide form and show loading screen
        document.querySelector('#contact-form').style.display = 'none';
        document.querySelector('#loading').style.display = 'block';

        // Prepare data for transport to server
        var data = 'email=' + encodeURIComponent(email)
            + '&subject=' + encodeURIComponent(subject)
            + '&message' + encodeURIComponent(message);

        // Simulate submitting the data to the server via AJAX request
        setTimeout(function ()
        {
            // This part executes once we get a simulated server response
            // Hide loading icon when we receive the response
            document.querySelector('#loading').style.display = 'block';

            // Simulated response with a 75% chance of success
            var success = Math.random() > 0.25;

            // Show success or error screen depending on the response 
            if (success)
            {
                document.querySelector('#success').style.display = 'block';
                // Changed this to remove the loading icon once a success message appears
                document.querySelector('#loading').style.display = 'none';
            } else
            {
                document.querySelector('#error').style.display = 'block';
                // Changed this to remove the loading icon once an error message appears
                document.querySelector('#loading').style.display = 'none';
            }
        }, 2000);
    }
}

// Now that both links have the same event listener called reset we'll make a function to reset everything

function reset(event)
{
    event.preventDefault();
    document.querySelector('#success').style.display = 'none';
    document.querySelector('#error').style.display = 'none';
    document.querySelector('#loading').style.display = 'none';
    document.querySelector('#contact-form').style.display = 'block';
    document.querySelector('#user-email').value = '';
    document.querySelector('#user-subject').value = '';
    document.querySelector('#user-message').value = '';

    // Thanks stackoverflow
    document.querySelector('#contact').scrollIntoView();
}
