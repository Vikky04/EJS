# EJS
This repo is all about my learning of EJS and pratice code included.

#Templating : 
EJS(embedded Javascript templates)
ejs is a simple templating language that lets you genearte html markup  with plain js.
Install and setup ejs :
![image](https://github.com/user-attachments/assets/a46f1edd-f3e2-4b57-94ef-8a675cd5ea73)

#Views Directory 
const path=require("path");
//require path package to view directory exccess from parent directory
app.set("views",path.join(__directoryname,"/views"));
//views folder on that path ... gives : ...parentfolder/directoryname/views 

#interpolation syntax : 
it refers to embedding expressions into marked up text.
it makes html dynamic we can use js code in html using these syntex.
In views->ejs file: 
 <h1>1+2</h1>
<h1><%= 1+2 %></h1> // <%= ---- %> syntex to print output for more (ejs.co -> tages)
![image](https://github.com/user-attachments/assets/1162f6bc-257d-4e22-a4cc-27f2f452c9f5)

#conditional statements in EJS
<% --this is syntax use to check conditions-- %>
adding condsitions inside EJS :
<% if(dice==6){%>
<h1>roll again</h1>
<% } %>

#loops in EJS 
<% for(users of follows){ %>
<li> <%= users %> </li>
<% } %>
