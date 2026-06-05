NAME: ABDULRAHMAN YUSUF OPEYEMI 
# Reflection Journal

### CLASS  01:---- The 2026 Web Ecosystem
## Theory
 1. Browser Rendering: HTML → Screen





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