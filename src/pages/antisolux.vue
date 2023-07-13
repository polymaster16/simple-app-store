<template>
    <div>
      <button @click="convertToPdf">Convert to PDF</button>
    </div>

    <div class="mt-2" v-html="html"></div>
  </template>
  
  <script setup>
  import html2pdf from 'html2pdf.js';
  const html = `
      <html>
        <head>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  
            body {
              font-family: 'Roboto', sans-serif;
            }
  
            .submission {
              width: 80%;
              margin: 0 auto;
              padding: 20px;
              background-color: #f5f5f5;
              border: 1px solid #ddd;
              border-radius: 5px;
            }
  
            .submission-header {
              text-align: center;
              margin-bottom: 20px;
            }
  
            .submission-body {
              line-height: 1.6;
            }
            .mb{
              margin-botton:2px;
            }
          </style>
        </head>
        <body>
          <div class="submission">
            <img class='mb' src='https://w7.pngwing.com/pngs/502/560/png-transparent-jpeg-file-interchange-format-file-formats-raw-format-aurora-effect-image-file-formats-text-computer-thumbnail.png' alt='ictu logo'>
            <div class="submission-header">
              <h1>Math Assignment Submission</h1>
              <p>Student Name: John Doe</p>
              <p>Matric Number: 123456789</p>
              <p>Group: A</p>
              <p>Email: johndoe@example.com</p>
            </div>
            <div class="submission-body">
              <p>Dear Professor,</p>
              <p>Please find attached my submission for the math assignment. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam quam sit amet purus interdum, vitae tristique sem vestibulum. Fusce cursus sem ac urna aliquet, a finibus lacus rhoncus. Pellentesque ullamcorper, purus a gravida eleifend, est metus lobortis nunc, ut convallis est lacus eu est.</p>
              <p>Thank you for your attention.</p>
              <p>Best regards,</p>
              <p>John Doe</p>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac iaculis metus, et posuere massa. Integer suscipit euismod turpis, ut malesuada quam euismod non. In lacinia erat et tellus egestas aliquet. Sed fermentum consectetur eleifend. Nunc pretium justo vel mi pellentesque, nec facilisis metus cursus. Proin fringilla euismod nunc, at viverra risus interdum non. Curabitur tincidunt felis sed ante scelerisque pharetra. Nulla a dolor tristique, mattis orci sit amet, congue massa. Curabitur consequat neque ut ligula pharetra, id luctus lectus cursus. Sed a diam tortor.

Morbi in bibendum enim, non efficitur urna. Aliquam erat volutpat. Nulla a eleifend nunc. Donec sagittis nisl sed risus facilisis, ac aliquam justo lacinia. Curabitur eu erat libero. Proin eget nisl non mauris posuere auctor non ut velit. Aenean eu dolor eget est mattis rhoncus eget sit amet purus. Proin malesuada suscipit mauris ac euismod. Vestibulum dignissim diam quis dolor commodo, eget gravida dui lobortis. Nam volutpat nisi id mi feugiat bibendum. Sed sed ipsum nec nisi sollicitudin tincidunt. Mauris in condimentum urna, ac fermentum libero. Phasellus tempor vulputate consectetur. Ut lobortis lobortis viverra. Ut eget tellus pharetra, egestas quam eu, cursus mi.</p>
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac iaculis metus, et posuere massa. Integer suscipit euismod turpis, ut malesuada quam euismod non. In lacinia erat et tellus egestas aliquet. Sed fermentum consectetur eleifend. Nunc pretium justo vel mi pellentesque, nec facilisis metus cursus. Proin fringilla euismod nunc, at viverra risus interdum non. Curabitur tincidunt felis sed ante scelerisque pharetra. Nulla a dolor tristique, mattis orci sit amet, congue massa. Curabitur consequat neque ut ligula pharetra, id luctus lectus cursus. Sed a diam tortor.

Morbi in bibendum enim, non efficitur urna. Aliquam erat volutpat. Nulla a eleifend nunc. Donec sagittis nisl sed risus facilisis, ac aliquam justo lacinia. Curabitur eu erat libero. Proin eget nisl non mauris posuere auctor non ut velit. Aenean eu dolor eget est mattis rhoncus eget sit amet purus. Proin malesuada suscipit mauris ac euismod. Vestibulum dignissim diam quis dolor commodo, eget gravida dui lobortis. Nam volutpat nisi id mi feugiat bibendum. Sed sed ipsum nec nisi sollicitudin tincidunt. Mauris in condimentum urna, ac fermentum libero. Phasellus tempor vulputate consectetur. Ut lobortis lobortis viverra. Ut eget tellus pharetra, egestas quam eu, cursus mi.</p>   
</div>
          </div>
        </body>
      </html>
    `;
  
  const convertToPdf = () => {

    const options = {
      filename: 'william_assignment_submission.pdf',
      html2canvas: {},
      jsPDF: { format: 'a4' },
    };
  
    html2pdf().set(options).from(html).save();
  };
  </script>
  