+++
title = "University of Warwick Computing Society"
+++

{{ hero() }}

<!-- Unfortunately, Zola doesn't allow nested shortcodes -->
<!-- This is expanding the blue.html shortcode -->
<div class="vstack text-white">
  <img class="w-100" src="assets/dividers/top-oval.svg">
  <div class="w-100 vstack align-items-center" style="background-color: #3A7DFF">

<h1>Hello, World! Here’s what we do:</h1>

<div class="w-100 d-flex flex-wrap justify-content-center">

{% iconblock(role="academic", title="Academic Events") %}
**No matter your experience, we’re here to help you pick up some skills.** Workshops, Industry Talks, Competitions, Student Talks, Courses, Revision Sessions, and more!
{% end %}
      
{% iconblock(role="gaming", title="Gaming Nights") %}
**Weekly gaming nights with PCs, consoles, VR and plenty of pizza**, a termly weekend-long LAN, and WASD, the UK’s largest student-run charity speedrunning event!
{% end %}

{% iconblock(role="social", title="All Kinds of Socials") %}
**Get to know us and your coursemates at our socials!** From weekly meals to BBQs, circling to pub crawls, or even from go-karting to laser tag.
{% end %}
      
{% iconblock(role="tech", title="Tech Services") %}
**We offer free hosting of websites**, scripts, services, game servers, etc. on our dedicated servers! Want to get involved? Join our open-source projects or Tech Team!
{% end %}

{% iconblock(role="inclusivity", title="Everyone is Welcome") %}
**We’re free-to-join and here to help you.** We have a dedicated inclusivity team for under-represented students in CS. Check out our Wildcards events!
{% end %}
      
{% iconblock(role="publicity", title="Our Community") %}
**Our community is a wide and welcoming network** of both current students and alumni with a wealth of knowledge to share!
{% end %}

</div>
  </div>
  <img class="w-100" src="assets/dividers/bottom-oval.svg">
</div>


<div class="w-100 vstack align-items-center my-5">
<h1>Our Socials</h1>

<div id="socials" class="mb-5 col-lg-10 gap-3 d-flex flex-wrap justify-content-evenly">
{% socialblock(social="discord", title="Discord", link="https://discord.uwcs.co.uk") %}
Where our members and alumni hang out
{% end %}

{% socialblock(social="instagram", title="Instagram", link="https://instagram.com/warwickcompsoc/") %}
Announcements and our weekly schedule
{% end %}

{% socialblock(title="Warwick SU", link="https://warwicksu.com/societies-sports/societies/computing/", img="assets/su-logo.svg") %}
We are free to join!
{% end %}

{% socialblock(social="youtube", title="YouTube", link="https://youtube.com/@warwickcomputing/") %}
Recorded talks from students & industry
{% end %}

{% socialblock(social="github", title="GitHub", link="https://github.com/uwcs") %}
Contribute to our open-source projects
{% end %}

{% socialblock(social="linkedin", title="LinkedIn", link="https://www.linkedin.com/company/uwcs/") %}
Networking and retrospectives
{% end %}

</div>
</div>

