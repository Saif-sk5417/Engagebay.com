import nav from "./navbar.js"

document.getElementById("navbar").innerHTML=nav();







// #########################-----------grid---------######################

let grid_data = [
    {
      image_url:
        "https://cdn5.engagebay.com/new/assets/img/icons/eb-features/automation.svg",
      name: "Automation",
      
    },

    {
        image_url:
          "https://cdn5.engagebay.com/new/assets/img/icons/eb-features/calling.svg",
        name: "Comapany management",
    },

    {
        image_url:
          "https://cdn5.engagebay.com/new/assets/img/icons/eb-features/contact-management.svg",
        name: "Contact management",
        
    },

    {
        image_url:
          "https://cdn5.engagebay.com/new/assets/img/icons/eb-features/deal-management.svg",
        name: "Deal management",
        
    },

    {
        image_url:
          "https://cdn5.engagebay.com/new/assets/img/icons/eb-features/email-broadcast.svg",
        name: "Email boardcast",
        
    },

    {
        image_url:
          "https://cdn5.engagebay.com/new/assets/img/icons/eb-features/email-sequences.svg",
        name: "Email Sequence",
        
    },

    {
        image_url:
          "https://cdn5.engagebay.com/new/assets/img/icons/eb-features/email-template-builder.svg",
        name: "Email Template Builder",
        
    },

    {
        image_url:
          "https://cdn5.engagebay.com/new/assets/img/icons/eb-features/forms.svg",
        name: "Form",
        
    },

    {
        image_url:
          "https://cdn5.engagebay.com/new/assets/img/icons/eb-features/landing-pages.svg",
        name: "Help Desk",
        
    },


    {
        image_url:
          "https://cdn5.engagebay.com/new/assets/img/icons/eb-features/landing-pages.svg",
        name: "Live Chat",
        
    },

    {
        image_url:
          "https://cdn5.engagebay.com/new/assets/img/icons/eb-features/automation.svg",
        name: "Automation",
        
      },
  
      {
          image_url:
            "https://cdn5.engagebay.com/new/assets/img/icons/eb-features/calling.svg",
          name: "Comapany management",
      },
  
      {
          image_url:
            "https://cdn5.engagebay.com/new/assets/img/icons/eb-features/contact-management.svg",
          name: "Contact management",
          
      },
  
      {
          image_url:
            "https://cdn5.engagebay.com/new/assets/img/icons/eb-features/deal-management.svg",
          name: "Deal management",
          
      },
  
      {
          image_url:
            "https://cdn5.engagebay.com/new/assets/img/icons/eb-features/email-broadcast.svg",
          name: "Email boardcast",
          
      },
  
      {
          image_url:
            "https://cdn5.engagebay.com/new/assets/img/icons/eb-features/email-sequences.svg",
          name: "Email Sequence",
          
      },
  
      {
          image_url:
            "https://cdn5.engagebay.com/new/assets/img/icons/eb-features/email-template-builder.svg",
          name: "Email Template Builder",
          
      },
  
      {
          image_url:
            "https://cdn5.engagebay.com/new/assets/img/icons/eb-features/forms.svg",
          name: "Form",
          
      },
  
      {
          image_url:
            "https://cdn5.engagebay.com/new/assets/img/icons/eb-features/landing-pages.svg",
          name: "Help Desk",
          
      },
  
  
      {
          image_url:
            "https://cdn5.engagebay.com/new/assets/img/icons/eb-features/landing-pages.svg",
          name: "Live Chat",
          
      },
      {
        image_url:
          "https://cdn5.engagebay.com/new/assets/img/icons/eb-features/email-template-builder.svg",
        name: "Email Template Builder",
        
    },

      {
        image_url:
          "https://cdn5.engagebay.com/new/assets/img/icons/eb-features/calling.svg",
        name: "Comapany management",
    },

    {
        image_url:
          "https://cdn5.engagebay.com/new/assets/img/icons/eb-features/contact-management.svg",
        name: "Contact management",
        
    },

    {
        image_url:
          "https://cdn5.engagebay.com/new/assets/img/icons/eb-features/deal-management.svg",
        name: "Deal management",
        
    },
  
   
]




let cont=document.querySelector("#engage_grid");

function display(data){

    document.querySelector("#engage_grid").innerHTML="";

    data.forEach(function(ele){
  
      let div1=document.createElement("div")
      div1.setAttribute("id","div_data")
      
  
      let img=document.createElement("img");
      img.src=ele.image_url;
  
      let h4=document.createElement("p");
       h4.innerText=ele.name;
  
      
      div1.append(img,h4)
      cont.append(div1)
  })
  
  }

  display(grid_data);
  