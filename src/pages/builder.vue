<template>
  <div class="pb-32">
    <navbar name="Resume Builder"/>

    <div v-motion-slide-left v-if="slide1" class="mx-8 mt-8">
        <p class="text-xl font-bold mb-4">General Information</p>
    <v-text-field
      v-model="name"
      label="Name"
    ></v-text-field>

    <v-text-field
      v-model="phone"
      :counter="7"
      label="Phone Number"
    ></v-text-field>

    <v-text-field
      v-model="email"
      label="E-mail"
    ></v-text-field>

    <v-text-field
      v-model="country"
      label="Country"
    ></v-text-field>

    <v-text-field
      v-model="town"
      label="Town"
    ></v-text-field>

    <v-text-field
      v-model="quata"
      label="Neighbourhood"
    ></v-text-field>

    <!-- <v-select  
      v-model="select"
      :items="items"
      label="Select"
    ></v-select> -->

    <div class="flex flex-row justify-end">
      <v-btn color="green-darken-4" @click="slide1= false ; slide2=true"> Next ⏭️</v-btn>
    </div>

</div>




<div v-motion-slide-left v-if="slide2" class="mx-8 mt-8">
        <p class="text-xl font-bold mb-4">🎯 Objectives</p>
    <v-textarea
      v-model="objectif"
      label="Objective of the resume"
    ></v-textarea>

  

    <div class="flex flex-row gap-4 justify-end">
        <v-btn color="grey-darken-4" @click="slide2 = false; slide1 = true;">🔙 Back</v-btn>

      <v-btn color="green-darken-4" @click="slide2= false; slide3 = true;"> Next ⏭️</v-btn>
    </div>

</div>

<div v-motion-slide-left v-if="slide3" class="mx-8 mt-8 ">
        <p class="text-xl font-bold mb-2 ">🎓  Education</p>
        <v-alert class="mb-4" color="grey-darken-4">Tip: Start from the latest to diploma to the earliest</v-alert>
        <div v-for="degree in degrees" class="grid grid-cols-1 gap-2">
        <div style="position: relative;"   class="bg-blue-50 py-8 px-4 rounded-md">
          <div @click="degree.visible = !degree.visible" class="font-bold ">{{ degree.title }}:</div>
          <div style="position: absolute; right: 10px; top:0px" class=" mt-4 flex flex-row gap-2 justify-center">
    <v-btn size="x-small" @click="degree.visible = !degree.visible"
     color="grey-darken-4" icon>🫥</v-btn>

     <v-btn size="x-small" @click="degrees = degrees.filter(x => x.title !== degree.title)"
     color="red-darken-4" icon>🗑️</v-btn>
    </div>
          <p v-if="degree.visible" class="mt-4">
    <v-text-field
      v-model="degree.title"
      label="Diploma name"
    ></v-text-field>
    <v-text-field
      v-model="degree.university"
      label="School"
    ></v-text-field>
    <v-text-field
      v-model="degree.town"
      label="Town"
    ></v-text-field>
    <v-text-field
      v-model="degree.country"
      label="Country"
    ></v-text-field>
    <div class="flex flex-row gap-2">
    <v-select
    :items="['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septembre', 'Octobre','Novembre','Decembre']"
      v-model="degree.gradMonth"
      label="Graduation Month"
    ></v-select>
    <v-text-field
    type="number"
      v-model="degree.gradYear"
      label="Graduation Year"
    ></v-text-field>
  </div>
  </p>
  </div>
</div>
  <div class=" mt-4 flex flex-row justify-center">
    <v-btn @click="degrees.push({title:'', university:'', town: '', country:'',visible: true, idm: `${(degrees.length+1)}. `, gradYear:2023, temp:'Graduated:', comma:','})"
     color="grey-darken-4" icon>+</v-btn>
    </div>

       
    <div style="position: absolute;" class="flex flex-row gap-4 justify-start mt-7">
      <v-btn color="black" icon @click="togglePreview">👁️</v-btn>
    </div>
    <div class="flex flex-row gap-4 mt-8 justify-end">
        <v-btn color="grey-darken-4" @click="slide3=false; slide2=true">🔙 Back</v-btn>

      <v-btn color="green-darken-4" @click="slide3=false; slide4=true"> Next ⏭️</v-btn>
    </div>

</div>



<div v-if="slide4" v-motion-slide-left class="mx-8 mt-8">
        <p class="text-xl font-bold mb-4" >🧑🏾‍💼 Work and experience</p>
        <v-alert class="mb-4" color="grey-darken-4">Tip: Start from the latest to job to the earliest</v-alert>

   
        <div v-for="exp in experiences" class="grid grid-cols-1 gap-2">
        <div style="position: relative;"   class="bg-green-50 py-8 px-4 rounded-md">
          <div @click="exp.visible = !exp.visible" class="font-bold ">{{ exp.title }}:</div>
          <div style="position: absolute; right: 10px; top:0px" class=" mt-4 flex flex-row gap-2 justify-center">
    <v-btn size="x-small" @click="exp.visible = !exp.visible"
     color="grey-darken-4" icon>🫥</v-btn>

     <v-btn size="x-small" @click="experiences = experiences.filter(x => x.title !== exp.title)"
     color="red-darken-4" icon>🗑️</v-btn>
    </div>
          <p v-if="exp.visible" class="mt-4">
    <v-text-field
      v-model="exp.title"
      label="Job title"
    ></v-text-field>
    <v-text-field
      v-model="exp.company"
      label="Company name"
    ></v-text-field>
    <v-text-field
      v-model="exp.town"
      label="Town"
    ></v-text-field>
    <v-text-field
      v-model="exp.country"
      label="Country"
    ></v-text-field>
    <div class="flex flex-row gap-2">
      <v-text-field
    type="date"
      v-model="exp.start"
      label="Start date"
    ></v-text-field>
    <v-text-field
    type="date"
      v-model="exp.end"
      label="End date"
    ></v-text-field>
  </div>

  <div @click="exp.visible = !exp.visible" class="font-bold mb-4 ">Tasks and achievements :</div>

  
  <v-text-field
      v-model="exp.task1"
      label="Task 1"
    ></v-text-field>
    
    <v-text-field
      v-model="exp.task2"
      label="Task 2"
    ></v-text-field>

  </p>
  </div>
  </div>

  <div class=" mt-4 flex flex-row justify-center">
    <v-btn @click="experiences.push({visible: true, idm: `${(degrees.length+1)}. `,})"
     color="grey-darken-4" icon>+</v-btn>
    </div>

       
    <div style="position: absolute;" class="flex flex-row gap-4 justify-start mt-7">
      <v-btn color="black" icon @click="togglePreview">👁️</v-btn>
    </div>
    <div class="flex flex-row gap-4 justify-end mt-8">
        <v-btn color="grey-darken-4" @click="slide4 = false; slide3 = true;">🔙 Back</v-btn>

      <v-btn color="green-darken-4" @click="slide4= false; slide5 = true;"> Next ⏭️</v-btn>
    </div>

</div>



<div  v-if="slide5" v-motion-slide-left class="mx-8 mt-8">
        <p class="text-xl font-bold mb-4">🤹🏿 Skills</p>
        <v-alert class="mb-4" color="grey-darken-4">Tip: Be clear and concise. -> Max no of skills = 8</v-alert>

        <div v-for="i in skills" class="flex flex-row gap-2">
    <v-text-field 
      v-model="i.txt"
      label="Skill"
    ></v-text-field>
    <v-btn @click="skills = skills.filter(x => x.txt !== i.txt)"
     size="x-small" 
     color="red-darken-4" icon>🗑️</v-btn>
  </div>
  
  <div class="  flex flex-row justify-center mb-10">
    <v-btn @click="skills.push({visible: true, idm: `${(skills.length+1)}. `,})"
     color="grey-darken-4" icon>+</v-btn>
    </div>
   
    <div style="position: absolute;" class="flex flex-row gap-4 justify-start mt-[-2px]">
      <v-btn icon color="black" @click="togglePreview">👁️</v-btn>
    </div>
    <div class="flex flex-row gap-4 justify-end">
        <v-btn color="grey-darken-4" @click="slide5 = false; slide4 = true;">🔙 Back</v-btn>

      <v-btn color="green-darken-4" @click="slide5= false; slide6 = true;"> Next ⏭️</v-btn>
    </div>

</div>



<div  v-if="slide6" v-motion-slide-left class="mx-8 mt-8">
        <p class="text-xl font-bold mb-4">🤹🏿 Hobbies and Interests</p>
        <v-alert class="mb-4" color="grey-darken-4">Tip: Be clear and concise. -> Max no of skills = 8</v-alert>

        <div v-for="i in hobbies" class="flex flex-row gap-2">
    <v-text-field 
      v-model="i.txt"
      label="Hobby"
    ></v-text-field>
    <v-btn @click="hobbies = hobbies.filter(x => x.txt !== i.txt)"
     size="x-small" 
     color="red-darken-4" icon>🗑️</v-btn>
  </div>
  
  <div class=" mb-10 flex flex-row justify-center">
    <v-btn @click="hobbies.push({visible: true, idm: `${(hobbies.length+1)}. `,})"
     color="grey-darken-4" icon>+</v-btn>
    </div>

    
<div style="position: absolute;" class="flex flex-row gap-4 justify-start mt-[-2px]">
      <v-btn color="black" icon @click="togglePreview">👁️ </v-btn>
    </div>
    <div class="flex flex-row gap-4 justify-end">
        <v-btn color="grey-darken-4" @click="slide6 = false; slide5 = true;">🔙 Back</v-btn>

      <v-btn color="green-darken-4" @click="slide6= false; slide7 = true;"> Next ⏭️</v-btn>
    </div>

</div>


  

    
      <div v-if="slide7" class="mt-8 mx-8">
        <p class="text-xl font-bold mb-4">Download your pdf</p>
  
      <v-btn color="black" @click="convertToPdf();">🤗 Download</v-btn>
      <div style="position: absolute;" class="flex flex-row gap-4 justify-start mt-12">
      <v-btn color="black" icon @click="togglePreview">👁️ </v-btn>
    </div>
      <div class="flex flex-row gap-4 justify-end mb-14">
        <v-btn color="grey-darken-4" @click="slide7 = false; slide6 = true;">🔙 Back</v-btn>

    </div>
    </div> 

    <div  class="mt-2" v-html="html"></div>

  </div>
  </template>
  
  <script setup>
  import html2pdf from 'html2pdf.js';
  import navbar from '../components/navbar.vue';

  import { ref, reactive } from 'vue'

  const name = ref('John Doe')
  const phone = ref('')
  const email = ref('')
  const town = ref('')
  const country = ref('')
  const quata = ref('')
  const objectif = ref('eg: To obtain a challenging position in the field of Medecine.')
  const select = ref('select')
  const preview = ref(true)

  const diploma = ref([])
  const diplomaCount = ref(0)

  const education = reactive({
    degree:'',
    university:'',
    town: '',
    country:'',
    graduation:'',
    visible: true,
  })

  const degrees = ref([{idm:'1.', gradYear:2023, temp:'Graduated:', comma:', ', visible:true}])
  const experiences = ref([{idm:'1.', visible:true}])
  const skills = ref([{}])
  const hobbies = ref([{}])


  const items = ref([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
  ])

  const slide1 = ref(true)
  const slide2 = ref(false)
  const slide3 = ref(false)
  const slide4 = ref(false)
  const slide5 = ref(false)
  const slide6 = ref(false)
  const slide7 = ref(false)
  const slide8 = ref(false)

  
  const html = ref()
  

  function togglePreview(){
    html.value = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume</title>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');
        body {
            font-family: Poppins;
            margin-left: 100px
            margin-right: 100px

            padding: 0;
        }

        .container {
            padding-top: 20px;
            margin-left: 100px
            margin-right: 100px
            margin-bottom: 50px;

        }

        .header {
            text-align: center;
        }

        .name {
            font-size: 36px;
            font-weight: bold;
            margin: 10px 0;
        }

        .contact {
            font-size: 18px;
            margin-bottom: 20px;
        }

        .section {
            margin-bottom: 30px;
        }

        .section-title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .subsection {
            margin-bottom: 10px;
        }

        .subsection-title {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 5px;
        }

        .date {
            font-style: italic;
        }

        ul {
            list-style-type: square;
            margin-left: 20px;
            padding: 0;
        }

        .skills {
            margin-top: 10px;
        }

        .hobbies {
            margin-top: 10px;
        }

        .reference {
            font-size: 18px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="name">${name.value}</div>
            <div class="contact">
                ${quata.value}, ${town.value}, ${country.value}<br>
                Email: ${email.value} | Phone: ${phone.value}
            </div>
        </div>

        <div class="section">
            <div class="section-title">Objective</div>
            ${objectif.value}
        </div>

        <div class="section">
            <div class="section-title">Education</div>
            <div class="subsection">
                <div class="subsection-title">${degrees.value[0].idm} ${degrees.value[0].title}</div>
                ${degrees.value[0].university}${degrees.value[0].comma} ${degrees.value[0].town}${degrees.value[0].comma} ${degrees.value[0].country}
                <div><stong>${degrees.value[0].temp}</stong> ${degrees.value[0].gradMonth} ${degrees.value[0].gradYear}</div>
            </div>
            <div class="subsection">
                <div class="subsection-title">${degrees.value.length>1 ? degrees.value[1].idm: ''} ${degrees.value.length>1 ? degrees.value[1].title: ''}</div>
                ${degrees.value.length>1 ? degrees.value[1].university: ''}${ degrees.value.length>1 ? degrees.value[1].comma:''} ${degrees.value.length>1 ? degrees.value[1].town:''}${degrees.value.length>1 ? degrees.value[1].comma:''} ${degrees.value.length>1 ? degrees.value[1].country:''}
                <div><stong> ${degrees.value.length>1 ? degrees.value[1].temp :''}</stong>  ${degrees.value.length>1 ? degrees.value[1].gradMonth:''} ${degrees.value.length>1 ? degrees.value[1].gradYear:''}</div>
            </div>

            <div class="subsection">
                <div class="subsection-title">${degrees.value.length>2 ? degrees.value[2].idm: ''} ${degrees.value.length>2 ? degrees.value[2].title: ''}</div>
                ${degrees.value.length>2 ? degrees.value[2].university: ''}${ degrees.value.length>2 ? degrees.value[2].comma:''} ${degrees.value.length>2 ? degrees.value[2].town:''}${degrees.value.length>2 ? degrees.value[2].comma:''} ${degrees.value.length>2 ? degrees.value[2].country:''}
                <div><stong> ${degrees.value.length>2 ? degrees.value[2].temp :''}</stong>  ${degrees.value.length>2 ? degrees.value[2].gradMonth:''} ${degrees.value.length>2 ? degrees.value[2].gradYear:''}</div>
            </div>

            <div class="subsection">
                <div class="subsection-title">${degrees.value.length>3 ? degrees.value[3].idm: ''} ${degrees.value.length>3 ? degrees.value[3].title: ''}</div>
                ${degrees.value.length>3 ? degrees.value[3].university: ''}${ degrees.value.length>3 ? degrees.value[3].comma:''} ${degrees.value.length>3 ? degrees.value[3].town:''}${degrees.value.length>3 ? degrees.value[3].comma:''} ${degrees.value.length>3 ? degrees.value[3].country:''}
                <div><stong> ${degrees.value.length>3 ? degrees.value[3].temp :''}</stong>  ${degrees.value.length>3 ? degrees.value[3].gradMonth:''} ${degrees.value.length>3 ? degrees.value[3].gradYear:''}</div>
            </div>
            <div class="subsection">
                <div class="subsection-title">${degrees.value.length>4 ? degrees.value[4].idm: ''} ${degrees.value.length>4 ? degrees.value[4].title: ''}</div>
                ${degrees.value.length>4 ? degrees.value[4].university: ''}${ degrees.value.length>4 ? degrees.value[4].comma:''} ${degrees.value.length>4 ? degrees.value[4].town:''}${degrees.value.length>4 ? degrees.value[4].comma:''} ${degrees.value.length>4 ? degrees.value[4].country:''}
                <div><stong> ${degrees.value.length>4 ? degrees.value[4].temp :''}</stong>  ${degrees.value.length>4 ? degrees.value[4].gradMonth:''} ${degrees.value.length>4 ? degrees.value[4].gradYear:''}</div>
            </div>
            <div class="subsection">
                <div class="subsection-title">${degrees.value.length>5 ? degrees.value[5].idm: ''} ${degrees.value.length>5 ? degrees.value[5].title: ''}</div>
                ${degrees.value.length>5 ? degrees.value[5].university: ''}${ degrees.value.length>5 ? degrees.value[5].comma:''} ${degrees.value.length>5 ? degrees.value[5].town:''}${degrees.value.length>5 ? degrees.value[5].comma:''} ${degrees.value.length>5 ? degrees.value[5].country:''}
                <div><stong> ${degrees.value.length>5 ? degrees.value[5].temp :''}</stong>  ${degrees.value.length>5 ? degrees.value[5].gradMonth:''} ${degrees.value.length>5 ? degrees.value[5].gradYear:''}</div>
            </div>
            <div class="subsection">
                <div class="subsection-title">${degrees.value.length>6 ? degrees.value[6].idm: ''} ${degrees.value.length>6 ? degrees.value[6].title: ''}</div>
                ${degrees.value.length>6 ? degrees.value[6].university: ''}${ degrees.value.length>6 ? degrees.value[6].comma:''} ${degrees.value.length>6 ? degrees.value[6].town:''}${degrees.value.length>6 ? degrees.value[6].comma:''} ${degrees.value.length>6 ? degrees.value[6].country:''}
                <div><stong> ${degrees.value.length>6 ? degrees.value[6].temp :''}</stong>  ${degrees.value.length>6 ? degrees.value[6].gradMonth:''} ${degrees.value.length>6 ? degrees.value[6].gradYear:''}</div>
            </div>
            <div class="subsection">
                <div class="subsection-title">${degrees.value.length>7 ? degrees.value[7].idm: ''} ${degrees.value.length>7 ? degrees.value[7].title: ''}</div>
                ${degrees.value.length>7 ? degrees.value[7].university: ''}${ degrees.value.length>7 ? degrees.value[7].comma:''} ${degrees.value.length>7 ? degrees.value[7].town:''}${degrees.value.length>7 ? degrees.value[7].comma:''} ${degrees.value.length>7 ? degrees.value[7].country:''}
                <div><stong> ${degrees.value.length>7 ? degrees.value[7].temp :''}</stong>  ${degrees.value.length>7 ? degrees.value[1].gradMonth:''} ${degrees.value.length>7 ? degrees.value[7].gradYear:''}</div>
            </div>

        </div>

        <div class="section">
            <div class="section-title">Work Experience</div>
        

            <div class="subsection">
                <div class="subsection-title">${experiences.value.length>0 ?experiences.value[0].title :''}</div>
                ${experiences.value.length>0 ?experiences.value[0].company :''}${experiences.value.length>0 ?', ' :''} ${experiences.value.length>0 ?experiences.value[0].town :''}${experiences.value.length>0 ?', ' :''} ${experiences.value.length>0 ?experiences.value[0].country :''}
                <div class="date"> ${experiences.value.length>0 ?experiences.value[0].start :''}  ${experiences.value.length>0 ?'->' :''}  ${experiences.value.length>0 ?experiences.value[0].end :''}</div>
                <ul>
                    <li> ${experiences.value.length>0 ?experiences.value[0].task1 :''}</li>
                    <li> ${experiences.value.length>0 ?experiences.value[0].task2 :''}</li>
                </ul>
            </div>
            <div class="subsection">
                <div class="subsection-title">${experiences.value.length>1 ?experiences.value[1].title :''}</div>
                ${experiences.value.length>1 ?experiences.value[1].company :''}${experiences.value.length>1 ?', ' :''} ${experiences.value.length>1 ?experiences.value[1].town :''}${experiences.value.length>1 ?', ' :''} ${experiences.value.length>1 ?experiences.value[1].country :''}
                <div class="date"> ${experiences.value.length>1 ?experiences.value[1].start :''}  ${experiences.value.length>1 ?'->' :''}  ${experiences.value.length>1 ?experiences.value[1].end :''}</div>
                <ul>
                  ${experiences.value.length>1 ?'<li>' :''} ${experiences.value.length>1 ?experiences.value[1].task1 :''}    ${experiences.value.length>1 ?'</li>' :''} 
                    ${experiences.value.length>1 ?'<li>' :''}  ${experiences.value.length>1 ?experiences.value[1].task2 :''}    ${experiences.value.length>1 ?'</li>' :''} 
                </ul>
            </div>

            <div class="subsection">
                <div class="subsection-title">${experiences.value.length>2 ?experiences.value[2].title :''}</div>
                ${experiences.value.length>2 ?experiences.value[2].company :''}${experiences.value.length>2 ?', ' :''} ${experiences.value.length>2 ?experiences.value[2].town :''}${experiences.value.length>2 ?', ' :''} ${experiences.value.length>2 ?experiences.value[2].country :''}
                <div class="date"> ${experiences.value.length>2 ?experiences.value[2].start :''}  ${experiences.value.length>2 ?'->' :''}  ${experiences.value.length>2 ?experiences.value[2].end :''}</div>
                <ul>
                  ${experiences.value.length>2 ?'<li>' :''}  ${experiences.value.length>2 ?experiences.value[2].task1 :''}    ${experiences.value.length>2 ?'</li>' :''} 
                  ${experiences.value.length>2 ?'<li>' :''}  ${experiences.value.length>2 ?experiences.value[2].task2 :''}    ${experiences.value.length>1 ?'</li>' :''} 
                </ul>
            </div>

            <div class="subsection">
                <div class="subsection-title">${experiences.value.length>3 ?experiences.value[3].title :''}</div>
                ${experiences.value.length>3 ?experiences.value[3].company :''}${experiences.value.length>3 ?', ' :''} ${experiences.value.length>3 ?experiences.value[3].town :''}${experiences.value.length>3 ?', ' :''} ${experiences.value.length>3 ?experiences.value[3].country :''}
                <div class="date"> ${experiences.value.length>3 ?experiences.value[3].start :''}  ${experiences.value.length>3 ?'->' :''}  ${experiences.value.length>3 ?experiences.value[3].end :''}</div>
                <ul>
                  ${experiences.value.length>3 ?'<li>' :''}  ${experiences.value.length>3 ?experiences.value[3].task1 :''}    ${experiences.value.length>3 ?'</li>' :''} 
                  ${experiences.value.length>3 ?'<li>' :''}  ${experiences.value.length>3 ?experiences.value[3].task2 :''}    ${experiences.value.length>3 ?'</li>' :''} 
                </ul>
            </div>

            <div class="subsection">
                <div class="subsection-title">${experiences.value.length>4 ?experiences.value[4].title :''}</div>
                ${experiences.value.length>4 ?experiences.value[4].company :''}${experiences.value.length>4 ?', ' :''} ${experiences.value.length>4 ?experiences.value[4].town :''}${experiences.value.length>4 ?', ' :''} ${experiences.value.length>4 ?experiences.value[4].country :''}
                <div class="date"> ${experiences.value.length>4 ?experiences.value[4].start :''}  ${experiences.value.length>4 ?'->' :''}  ${experiences.value.length>4 ?experiences.value[4].end :''}</div>
                <ul>
                  ${experiences.value.length>4 ?'<li>' :''}  ${experiences.value.length>4 ?experiences.value[4].task1 :''}    ${experiences.value.length>4 ?'</li>' :''} 
                  ${experiences.value.length>4 ?'<li>' :''}  ${experiences.value.length>4 ?experiences.value[4].task2 :''}    ${experiences.value.length>4 ?'</li>' :''} 
                </ul>
            </div>



        </div>


        


        <div class="section">
            <div class="section-title">Skills</div>
            <div class="skills">
              ${skills.value.length>0 ?skills.value[0].txt :''} ${skills.value.length>0 ?',' :''}  ${skills.value.length>1 ?skills.value[1].txt :''} ${skills.value.length>1 ?', ' :''}
                ${skills.value.length>2 ?skills.value[2].txt :''} ${skills.value.length>2 ?',' :''}  ${skills.value.length>3 ?skills.value[3].txt :''} ${skills.value.length>3 ?',' :''}   ${skills.value.length>4 ?skills.value[4].txt :''} ${skills.value.length>4 ?',' :''} 
                ${skills.value.length>5 ?skills.value[5].txt :''} ${skills.value.length>5 ?',' :''}   ${skills.value.length>6 ?skills.value[6].txt :''} ${skills.value.length>6 ?',' :''} 
                ${skills.value.length>7 ?skills.value[7].txt :''} ${skills.value.length>7 ?',' :''} 
                </div>
        </div>

        <div class="section">
            <div class="section-title">Hobbies and Interests</div>
            <div class="hobbies">
              ${hobbies.value.length>0 ?hobbies.value[0].txt :''} ${hobbies.value.length>0 ?',' :''}  ${hobbies.value.length>1 ?hobbies.value[1].txt :''} ${hobbies.value.length>1 ?', ' :''}
                ${hobbies.value.length>2 ?hobbies.value[2].txt :''} ${hobbies.value.length>2 ?',' :''}  ${hobbies.value.length>3 ?hobbies.value[3].txt :''} ${hobbies.value.length>3 ?',' :''}   ${hobbies.value.length>4 ?hobbies.value[4].txt :''} ${hobbies.value.length>4 ?',' :''} 
                ${hobbies.value.length>5 ?hobbies.value[5].txt :''} ${hobbies.value.length>5 ?',' :''}   ${hobbies.value.length>6 ?hobbies.value[6].txt :''} ${hobbies.value.length>6 ?',' :''} 
                ${hobbies.value.length>7 ?hobbies.value[7].txt :''} ${hobbies.value.length>7 ?',' :''} 
            </div>
        </div>

        <div class="section">
            <div class="section-title">References</div>
            <div class="reference">
                Available upon request.
            </div>
        </div>
    </div>
</body>
</html>

    `;
  }

  const convertToPdf = () => {
    togglePreview(); 
    const options = {
      filename: `${name.value} resume.pdf`,
      html2canvas: {},
      jsPDF: { format: 'a4' },
    };
  
    html2pdf().set(options).from(html.value).save();
  };
  </script>
  