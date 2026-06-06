NAME: ABDULRAHMAN YUSUF OPEYEMI 
# Reflection Journal

### CLASS  01:---- The 2026 Web Ecosystem
## Theory
 1. Browser Rendering: HTML → Screen
      When a browser receives the HTML, firstly before it turns to what what we see on the screen it takes html and create a DOM tree which contains the elements on the page foe example the "head" "body" and the body contains the divs, the <p>  then it this DOM (elements on the page) and joins it with the CSS to create a RENDER TREE. The RENDER TREE is what determines how the element will look example like the colors, fonts, sizes,after that the layout help to calculate the size and dimensions of every element to help the element fits or display properly on the screen and finally the PAINT STAGE converts the calculations into drawings, images text, on the display screen

       view the  Asset  folder for the drawing .



 2. HTTP/3 uses QUIC instead of TCP
        The QUIC  solves the problem of slow connection that the TCP coud'nt expecially on mobile network
        The O-RTT handshake: this QUIC send data immediately even on new connection also 
        The Stream multiplexing: multiple streams run independently i.e one lost packet doesnt blockn others also 
        Smarter congestion control: it adapt quickly to changing network conditions also the connection migration that keeps session alive when switching network

 3. Website without semantic HTML



## Product Thinking

 4. Blog for famous chef - semantic HTML
       Semantic HTML helps search engines read the code easier using                                                         
         <article>: this tells the search engine that it standalone peice of content                                               
         <header>: this highlight the titles and key important data making it more visible or discoverable.
         <main>: this clarifies  the body of the page.
         <aside>: this seperates related data or notes. These semantic element make the search engine rank content higher and make it easier to maintain and collaborate on.


 5. Edge computing for real-time multiplayer game
         Edge computing mattersmost because it , giving players faster reactions and smoother gameplay. It also improves fairness by letting people in different regions connect to nearby servers, so no one gains an advantage just because of location. Edge nodes handle traffic spikes locally, keeping matches stable during peak hours. 

### Engineering Best Practice,

6. Response to junior dev: “I just use divs everywhere”
   I disagree using divs everywhere because, not because div is not tag to use no, it a good flexible container one can use 
   when its needed not using it everywhere, when youn use divs everywhere its harder to differentiate whats is your nav items from your main content, it is harder to index, i will advice using some semantic HTML element like nav, main, header, these element helps you to convey meaning easier, it helps to structure your page properly, its gives the page hierarchy. its also makes the code easier to read you can differentiate whats your header from the nav to also the main content of the page 

---

## CLASS 02 -----  Typography & Information Hierarchy
## THEORY 
1. The tag <em> means the text or word is important which is the screen reader will emphasize on it or  stress it when reading, 
   it shows on the screen as an italics for example <p>You <em>must</em> submit ur assignment before saturday morning. 
   in the example above the 'must' is emphasize and sressed and will visalized in italics 

   The <i> tag means italics or idiomtic, it is just to differenciate a word but not important it's just for style

2. The three HTML element are 
    I.   <button>: the screen readers tell the users that its clickable, its an action button 
    II.  <img>:it usually comes with a alt attributes, the creen reader  display the image save in the image file the alt attributes is the the  
               replacement for the image  
    III. <a>: its called the anchor tag, the screen readers display it as link, the link navigate to somwhere usually the address in the link.

3. The arial-label is used when there is no text on the screen for screen readers to read but there is an element that needs a name
   while fix HTML is used when there is wrong tag and could be change to the right sementic tag 

## ACCESSIBILITY REFLECTION
   I. Using GTB bank as a case study 


## PRODUCT THINKING
   I. <h1> -  It carries the Page Title, i.e The API Name  
       Example: Payments API

    II.  <h2> - This shows the Major Sections, it contains 
          What the API does, use cases, quick links.
          Authentication & Authorization
          Methods supported (API key, OAuth).

    III. <h3> - This shows the Endpoint Details (nested under Endpoints)
          For each endpoint:Endpoint Name (e.g., Create Transaction, Path & Method: POST /transactions, Description: One-liner purpose.
          Parameters: Table with name, type, required/optional, description.

## CLASS 03 ------ Modern Assets & Linking
## THEORY 
1. firstly we check if the dimensionsion is oversized, if it's then we resized reason is because large dimensions waste bandwidth, using tools
 like photo and picture resizer app or photoshop. Then we choose the modern and best format which is webP this is because the format reduce size better than normal png and jpeg format, the webP is 70-80% smaller than the png and jpeg.

2. in a situation whereby we have a large image in a desktopsize on a web page and a mobile phone user go on the webpage 
  instead of the mobile phone downloading the full desktop image and their phone doesnt need up to that size the 'srcset' attribute will provide the multiple version of the image in different sizes and resolution, which the browser automatically pick the appropriate one based on the devices scren size.

3. target="_blank" and rel="noopener"  work vice vercer  they are opposite of eachn other when we use target="_blank",then we open a new tab,
  the  new tab can actually have access to the page that opened it and change some things while the rel="noopener" breake that access the new tab cant have access to the page.

## Engineering Thinking
 1. Displaying 50 product images on a page my optimization strategy will be, Considering                
    I. lazy loading: by adding lazy loading it prevent the images below the fold load from loading without being scrolled into to view,
        it loads only when you scrolled down to view it                      
    II. Format choice: for the format choice i will prefer using the webP format because its the modern format and also reduces the sizes 
        of the images                                                                    
    III. The CDN Delivery: it helps in faster dilivery                                                                                           IV.  Responsive Sizing: using the "srcset" it provides the browser with different version of of the images right for each devices


## Class 04------ Modern Forms & User Experience
## THEORY
1. In client-side validation: after users enters email it instantly flags the error and shows a message,
    and also prevent submission                                                                                                                   
    while in only server-side validation: after submission the forms submit, then the server checks then return error after short period of time   


2. The autocomplete attributes tell the browser what kind of information a form field expctes, so it can suggest aauto-fill for the user                                                                                                        
      I. autocomplete - name: it auto fill the user's full name                                                                               
      II. autocomplete - email: it helps the user;s fill the saved email address                                                       
      III. autocomplete - tel: it helps to suggest the stored phone numbers                                                    
      IV. autocomplete - password: it helps to fill in the save password

##  Product Thinking
1. building a multi-step job application form of 5 steps and the user loses internet  on step 4, to handle this i wiil do the following                                                                                                         
     1. create a progress saving which auto save after each steps                                                          
     2. create a validation strategy which validate the user or client at each step                           
     3. Error messaging: this are message displayed whenever thre isnan error example connection lost, 

2. we use native <select> for fast accessiblity, it s moblile ffriendly, it saves time and ensure usability                                                                                                                                           while ccustom dropdown are use fo features like search, icons or multi selects it add flexibility 

## Engineering Best Practice
1. <label for="password">Create Password</label>
<input id="password" type="password">
<button type="button"> Show/Hide</button>
<div role="status" id="strengthMeter">Strength: Weak</div>
<ul id="passwordHelp">
  <li>At least 8 characters</li>
  <li>One uppercase letter</li>
  <li>One number</li>
  <li>One symbol</li>
</ul>

## Class 05----- The CSS Engine — Box Model & Specificity
## THEORY 
1. 
_____________________________
|         MargiN            |
|  _______________________  |
|  |       Border        |  |
|  |  _________________  |  |
|  |  |    Padding    |  |  |
|  |  | ______________|  |  |
|  |  | |  Content  | |  |  |
|  |  | _____________ |  |  |
|  |_____________________|  |
|  _______________________  |
|___________________________|

** The Content is the actual text, image, or element inside, its the body of the page 
** The padding is the Space between content and border.
** The Borders is the line surrounding padding and content.
** The Margin is the Space outside the border,that separating two elements from each other.

2.  CSS specificity decides which rule applies when multiple selectors target the same element. It’s calculated a(inline, IDs, classes, elements).
    For .'header nav ul li a', the score is (0,0,1,4). For 'nav a.active', it’s '(0,0,1,2)'. For '.nav-links a', it’s (0,0,1,1). Since all have one class, the tie‑breaker is elements, so .header nav ul li a` wins with the highest specificity.
3. if there are multiple style decleration for one element cascade is like the rule the browser use to decide and choose
    the style that apply to that element it make sure the more specific rule wins understanding saves one from writting multiple extra code 

##  Engineering Thinking 
1. when a padding of 10px is added to an element and it became wider than the expected width this means the 10px covers the content
   and the padding is added on top to correct that we use box-sizing: border-box; the border-box include the content, padding and border this prevent it from expanding.

2. 



## Class 06----- Flexbox Mastery
##  Theory
  1. Flex-basis: is the default size every has element has
     Flex-grow: is how much can an elment or objects cn expand or size it can consume if there is any available space or size the element with     the higher grow will expand more and take the more space
     Flex-shrink: is how much an element  or bjects can reduce or shrink it size if there ia no avilable size or small space. 

2. The align-items make a flex items expand to fill across axis usually height   It wont work if the items already have fixed height
    <div style="display: flex; align-items: </div> 

## ENGINEERING THINKING
1. the solution to this question is the class 06 html  and css file in my cosing folder 
explanation on how in did it 
after creating my pure html in my htlm i created a parent div that carries all the navbar items, then iside the main div there are sub divs that contains logo, navitens, and the button. then moving to the styling, i gave the main div a flex and also  display: flex;
  align-items: center;
  justify-content: space-between;

2. 


## CLASS 07-----CSS Grid & Layout Complexity
## THEORY
1. Css grid is been used for two or more axis layout while flexbox is use for one direction or axis layout,
   css grid is best used when rows and columns matter   scenarios where css grid is been used 1. a clothing brond image galleries where there were arrange in both rows and columns and they both needs equal spacing 2. A magazines and newspaper with two or more article on 2 or more coulumns 3. dashboard layout 
2. grid-template-area is used to name the part of the layout and arrange them like a visual map, it be name and describe usinng words
    like header, main, sidebar and footer
##  Engineering Thinking
 1. 

 2. 



 ## CLASSS 08-------Tailwind CSS Fundamentals
 ## THEORY 
  1. The utility-first means using small classes margin(m-t) padding (p-5) bagroundcolor(bg-blue) instead of the semantic
     component or element the utility-first philosophy is used because of it speed and flexibility
  2. The JIT(just-in-time) Compiler in tailwind is just a system whereby the tailwind/css only generates the css the web 
     need or actually use inwhich these leads to a huge reduction in the size of the file and also makes it faster
   ##  Product Thinking
    1. when we use tailwind css it doesnt make the html ugly rather it more readability it reduces the stress of moving into
       seperates file for the css and also track or style easily 
     II. also maintainability tailwind make more reusable, III. tailwind also the consistency tailwind makes youn use spacing like p-2, p-6,p-8 instead of random 17px, 22px and so on   also for the III. perrforrmance, tailwind gives you speed and also with the JIT only the classses you need are use which reduce the size of the html.



## Class 09---- Advanced Tailwind & Responsive Design
##  Theory
  1. The md: prefix in Tailwind CSS is used to apply styles at the medium breakpoint. For example, md:text-base will apply the 
     text size to medium screens and larger. The md: prefix is part of Tailwind's mobile-first approach. To use the custom breakpoint
       we go to tailwind.config.js and add the custom size before we can use in  our htlm
  2. Arbitery values are use when we have already defined scale and you wan to use somthing else or specific one while extending the 
     config is use when the value been set will be reuse across the project
 ## Engineering Best Practice
   1. 



## Class 10----- Memory & Variables
##  Theory
 1.  In terms of scope 'var' is visible throughout the function where its declered while let and const are only exist inside the nearest block
     In terms of hoisting 'var' can be reference bedore its decleration while let and const cant bereferenced until they are declared
     In terms of Reassignment var and let can be reassigned freely but const cant be reassigne.
 2. The TDZ is use to prevent bugs its a period between when a block scope starts and when a let or const variable is declared. 
     During this time, the variable exists but cannot be accessed—any attempt throws a ReferenceError.
 3.  


 ##  Product Thinking
 1. For the display i would use "let" because whenever the user type the numbers and the are numbers are shown for that to happen thst 
     meeans the numbers are reassigned frequently    
     while for the operator that is the add, subtract, divide, and multiplication "let" is also used for this
     while for the previous operand since the display value change whenever new calculation start that means "let" must be used for the reassignment.

## Class 11------ Control Flow & Comparison
## THEORY
