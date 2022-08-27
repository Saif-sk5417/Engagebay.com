//Top section start
let resources= [
    {
        resimage :'https://cdn5.engagebay.com/resources/img/landing-page-guide.png',
        resname :'Landing Pages Guide',
        resdes:'Know everything about landing pages.',
    },
    {
        resimage :'https://cdn5.engagebay.com/resources/img/marketing-guide.png',
        resname :'Inbound Marketing Guide',
        resdes:'Tips and techniques to grow your inbound marketing.',
    },
    {
        resimage :'https://cdn5.engagebay.com/resources/img/web-popup.png',
        resname :'Website Popups Guide',
        resdes:'Know every detail on how to use website popups to generate leads.',
    },
    {
        resimage :'https://cdn5.engagebay.com/resources/img/marketing-automation.png',
        resname :'Marketing Automation Guide',
        resdes:'Email marketing automation tips and best practices.',
    },
    {
        resimage :'https://cdn5.engagebay.com/resources/img/email-marketing-auto.png',
        resname :'Email Marketing Guide',
        resdes:'Tips and techniques to do better email marketing.',
    },
    {
        resimage :'https://cdn5.engagebay.com/resources/img/lead-gen-guide.png',
        resname :'Lead Generation Guide',
        resdes:'This handy guide will help you understand everything about lead generation.',
    },
    {
        resimage :'https://cdn5.engagebay.com/resources/img/crm-guide.png',
        resname :'CRM Guide',
        resdes:'CRM (Customer Relationship Management) tips and best practices.',
    },
    {
        resimage :'https://cdn5.engagebay.com/resources/img/helpdesk-guide.png',
        resname :'Helpdesk Guide',
        resdes:'If a company has decided to use a helpdesk service',
    },
];
let resdisplay =(data)=>{
let box = document.getElementById('resourcesbox')
data.forEach(function({resname,resimage,resdes}){
let bag = document.createElement('div')
 let img = document.createElement('img')
img.src = resimage
let name = document.createElement('p')
name.innerText= resname
let des = document.createElement('p')
des.setAttribute('id','resdes')
des.innerText= resdes
resbtn = document.createElement('button')
resbtn.innerText='Read More...'
resbtn.setAttribute('id','resbtn')
bag.append(img,name,des,resbtn)
box.append(bag)
})
}
resdisplay(resources)
//Top section end

