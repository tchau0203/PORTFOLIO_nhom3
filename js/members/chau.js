
const portfolioData = {
  name: "Hồ Nguyễn Thái Châu",
  firstName: "Thái Châu",
  lastName: "Hồ Nguyễn",
  tagline: "Sinh viên kỹ thuật lập trình",
  resumeLink: "#",

  about: {
    avatar: "../images/chau/avatar.jpg",
    description: `Tôi là sinh viên năm 3 ngành Công nghệ Thông tin tại Trường Đại học Giao thông Vận tải TP.HCM. Tôi yêu thích lập trình và phát triển các ứng dụng web, đặc biệt quan tâm đến Backend và thiết kế hệ thống.
Mục tiêu của tôi là không ngừng học hỏi, nâng cao tư duy lập trình, trau dồi kỹ năng làm việc nhóm và xây dựng những dự án thực tế có giá trị. Trong tương lai, tôi hướng đến trở thành một lập trình viên có chuyên môn vững vàng và khả năng phát triển các sản phẩm phần mềm hoàn chỉnh.`,
    highlights: [
      { label: "Nơi sinh", value: "Đông Hòa, Phú Yên" },
      { label: "Trường Đại học", value: "ĐH Giao thông Vận tải TP.HCM" },
      { label: "Chuyên ngành", value: "Công nghệ Thông tin" },
      { label: "Trình độ", value: "Sinh viên Năm 3 (K24)" },
    ],
  },

  skills: {
    technical: [
      { name: "JavaScript", level: 75, icon: "../images/chau/skills/javascript.png" },
      { name: "Python", level: 85, icon: "../images/chau/skills/python.svg" },
      { name: "Java", level: 60, icon: "../images/chau/skills/java.svg" },
      { name: "HTML & CSS", level: 80, icon: "../images/chau/skills/htmlcss.png" },
      { name: "React.js", level: 65, icon: "../images/chau/skills/react.png" },
      { name: "C / C++", level: 75, icon: "../images/chau/skills/cpp.png" },
      { name: "SQL / PostgreSQL", level: 70, icon: "../images/chau/skills/postgresql.png" },
    ],
    soft: [
      "Làm việc nhóm",
      "Tính chủ động và tinh thần trách nhiệm",
      "Kỹ năng giao tiếp",
      "Quản lý thời gian",
      "Tư duy giải quyết vấn đề",
      "Khả năng tự học và làm quen với môi trường nhanh",
      "Tư duy phản biện",
    ],
    tools: [
      { name: "Antigravity", icon: "../images/chau/skills/antigravity.png" },
      { name: "Git & GitHub", icon: "../images/chau/skills/github.png" },
      { name: "PostgreSQL", icon: "../images/chau/skills/postgresql.png" },
      { name: "Jira", icon: "../images/chau/skills/jira.png" },
      { name: "Figma", icon: "../images/chau/skills/figma.svg" },
      { name: "Claude", icon: "../images/chau/skills/claude.png" },
      { name: "Canva", icon: "../images/chau/skills/canva.svg" },
    ],
  },

  // Danh sách dự án — mỗi dự án hiển thị thành 1 Project Card
  
  projects: [
    {
      title: "Expense Manager",
      image: "../images/chau/expense.jpg",
      description:
        "Hệ thống Quản lý Chi tiêu Cá nhân được phát triển bằng ngôn ngữ JavaScript (Node.js ở backend, Vanilla JavaScript ở frontend kết hợp cơ sở dữ liệu PostgreSQL) với mục đích giúp người dùng theo dõi thu chi hàng ngày, thiết lập hạn mức ngân sách và phân tích xu hướng tài chính một cách trực quan.",
      tags: ["Node.js", "PostgreSQL", "JavaScript"],
      liveLink: "#",
      codeLink: "https://github.com/tchau0203/personal_expense_manager",
    },
    {
      title: "AI Chatbot",
      image: "../images/chau/chatbot.jpg",
      description:
        "Hệ thống được viết bằng Python (kết hợp Streamlit và Google GenAI SDK), dùng để làm chatbot AI thông minh hỗ trợ trò chuyện và giải đáp theo thời gian thực với Google Gemini. Ứng dụng sở hữu giao diện tinh gọn tương tự ChatGPT, hỗ trợ phản hồi dạng streaming mượt mà. Người dùng có thể linh hoạt chuyển đổi giữa các mô hình AI và tùy chỉnh cấp độ tư duy trực tiếp trên thanh công cụ chat.",
      tags: ["Python", "Streamlit", "Gemini API"],
      liveLink: "#",
      codeLink: "https://github.com/tchau0203/Chat_bot",
    },
  ],

  qualification: {
    education: [
      {
        title: "Công nghệ Thông tin",
        subtitle: "Đại học Giao Thông Vận tải TP.HCM",
        duration: "2024 - 2028",
        description: "Hiện đang là sinh viên năm thứ ba. Điểm GPA tích lũy: 3.54/4.0",
      },
      {
        title: "Tốt nghiệp THPT (Lớp 12)",
        subtitle: "Trường THPT Lê Trung Kiên",
        duration: "2021 – 2024",
        description: "Khối Tự nhiên. Đạt kết quả xếp loại Giỏi.",
      },
    ],
    work: [
      {
        title: "Sinh viên tiêu biểu năm 2026",
        duration: "2026",
        description: "Được ban liên lạc sinh viên Phú Yên tại Thành Phố HCM vinh danh.",
      },
      {
        title: "Đạt được 2 học bổng liên tiếp",
        duration: "2025 – 2026",
        description: "Đạt 2 học bổng khuyến khích học tập liên tiếp tại trường ĐH Giao thông Vận tải TP.HCM.",
      },
    ],
    
  },

  contact: {
    email: "thaichau020326@gmail.com",
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/tchau0203", icon: "github" },
      { platform: "Facebook", url: "https://www.facebook.com/Thaichau020326", icon: "facebook" },
      { platform: "Instagram", url: "https://www.instagram.com/ts.chou023/", icon: "instagram" },
    ],
  },

  theme: {
    accentColor: "#4F46E5",
    accentColorDark: "#3730A3",
  },
};


// 1. THƯ VIỆN HIỆU ỨNG DÂY TĨNH ĐIỆN & HẠT TƯƠNG TÁC (PARTICLES ENGINE)

var pJS = function(tag_id, params){

  var canvas_el = document.querySelector('#'+tag_id+' > .particles-js-canvas-el');

  /* particles.js variables with default values */
  this.pJS = {
    canvas: {
      el: canvas_el,
      w: canvas_el.offsetWidth,
      h: canvas_el.offsetHeight
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#fff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#ff0000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: '',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 2,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 20,
        random: false,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: '#fff',
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 3000,
          rotateY: 3000
        }
      },
      array: []
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab:{
          distance: 100,
          line_linked:{
            opacity: 1
          }
        },
        bubble:{
          distance: 200,
          size: 80,
          duration: 0.4
        },
        repulse:{
          distance: 200,
          duration: 0.4
        },
        push:{
          particles_nb: 4
        },
        remove:{
          particles_nb: 2
        }
      },
      mouse:{}
    },
    retina_detect: false,
    fn: {
      interact: {},
      modes: {},
      vendors:{}
    },
    tmp: {}
  };

  var pJS = this.pJS;

  /* params settings */
  if(params){
    Object.deepExtend(pJS, params);
  }

  pJS.tmp.obj = {
    size_value: pJS.particles.size.value,
    size_anim_speed: pJS.particles.size.anim.speed,
    move_speed: pJS.particles.move.speed,
    line_linked_distance: pJS.particles.line_linked.distance,
    line_linked_width: pJS.particles.line_linked.width,
    mode_grab_distance: pJS.interactivity.modes.grab.distance,
    mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
    mode_bubble_size: pJS.interactivity.modes.bubble.size,
    mode_repulse_distance: pJS.interactivity.modes.repulse.distance
  };


  pJS.fn.retinaInit = function(){

    if(pJS.retina_detect && window.devicePixelRatio > 1){
      pJS.canvas.pxratio = window.devicePixelRatio; 
      pJS.tmp.retina = true;
    } 
    else{
      pJS.canvas.pxratio = 1;
      pJS.tmp.retina = false;
    }

    pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
    pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;

    pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
    pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
    pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
    pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
    pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
    pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;

  };



  /* ---------- pJS functions - canvas ------------ */

  pJS.fn.canvasInit = function(){
    pJS.canvas.ctx = pJS.canvas.el.getContext('2d');
  };

  pJS.fn.canvasSize = function(){

    pJS.canvas.el.width = pJS.canvas.w;
    pJS.canvas.el.height = pJS.canvas.h;

    if(pJS && pJS.interactivity.events.resize){

      window.addEventListener('resize', function(){

          pJS.canvas.w = pJS.canvas.el.offsetWidth;
          pJS.canvas.h = pJS.canvas.el.offsetHeight;

          /* resize canvas */
          if(pJS.tmp.retina){
            pJS.canvas.w *= pJS.canvas.pxratio;
            pJS.canvas.h *= pJS.canvas.pxratio;
          }

          pJS.canvas.el.width = pJS.canvas.w;
          pJS.canvas.el.height = pJS.canvas.h;

          /* repaint canvas on anim disabled */
          if(!pJS.particles.move.enable){
            pJS.fn.particlesEmpty();
            pJS.fn.particlesCreate();
            pJS.fn.particlesDraw();
            pJS.fn.vendors.densityAutoParticles();
          }

        /* density particles enabled */
        pJS.fn.vendors.densityAutoParticles();

      });

    }

  };


  pJS.fn.canvasPaint = function(){
    pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };

  pJS.fn.canvasClear = function(){
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };


  /* --------- pJS functions - particles ----------- */

  pJS.fn.particle = function(color, opacity, position){

    /* size */
    this.radius = (pJS.particles.size.random ? Math.random() : 1) * pJS.particles.size.value;
    if(pJS.particles.size.anim.enable){
      this.size_status = false;
      this.vs = pJS.particles.size.anim.speed / 100;
      if(!pJS.particles.size.anim.sync){
        this.vs = this.vs * Math.random();
      }
    }

    /* position */
    this.x = position ? position.x : Math.random() * pJS.canvas.w;
    this.y = position ? position.y : Math.random() * pJS.canvas.h;

    /* check position  - into the canvas */
    if(this.x > pJS.canvas.w - this.radius*2) this.x = this.x - this.radius;
    else if(this.x < this.radius*2) this.x = this.x + this.radius;
    if(this.y > pJS.canvas.h - this.radius*2) this.y = this.y - this.radius;
    else if(this.y < this.radius*2) this.y = this.y + this.radius;

    /* check position - avoid overlap */
    if(pJS.particles.move.bounce){
      pJS.fn.vendors.checkOverlap(this, position);
    }

    /* color */
    this.color = {};
    if(typeof(color.value) == 'object'){

      if(color.value instanceof Array){
        var color_selected = color.value[Math.floor(Math.random() * pJS.particles.color.value.length)];
        this.color.rgb = hexToRgb(color_selected);
      }else{
        if(color.value.r != undefined && color.value.g != undefined && color.value.b != undefined){
          this.color.rgb = {
            r: color.value.r,
            g: color.value.g,
            b: color.value.b
          }
        }
        if(color.value.h != undefined && color.value.s != undefined && color.value.l != undefined){
          this.color.hsl = {
            h: color.value.h,
            s: color.value.s,
            l: color.value.l
          }
        }
      }

    }
    else if(color.value == 'random'){
      this.color.rgb = {
        r: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        g: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        b: (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
      }
    }
    else if(typeof(color.value) == 'string'){
      this.color = color;
      this.color.rgb = hexToRgb(this.color.value);
    }

    /* opacity */
    this.opacity = (pJS.particles.opacity.random ? Math.random() : 1) * pJS.particles.opacity.value;
    if(pJS.particles.opacity.anim.enable){
      this.opacity_status = false;
      this.vo = pJS.particles.opacity.anim.speed / 100;
      if(!pJS.particles.opacity.anim.sync){
        this.vo = this.vo * Math.random();
      }
    }

    /* animation - velocity for speed */
    var velbase = {}
    switch(pJS.particles.move.direction){
      case 'top':
        velbase = { x:0, y:-1 };
      break;
      case 'top-right':
        velbase = { x:0.5, y:-0.5 };
      break;
      case 'right':
        velbase = { x:1, y:-0 };
      break;
      case 'bottom-right':
        velbase = { x:0.5, y:0.5 };
      break;
      case 'bottom':
        velbase = { x:0, y:1 };
      break;
      case 'bottom-left':
        velbase = { x:-0.5, y:1 };
      break;
      case 'left':
        velbase = { x:-1, y:0 };
      break;
      case 'top-left':
        velbase = { x:-0.5, y:-0.5 };
      break;
      default:
        velbase = { x:0, y:0 };
      break;
    }

    if(pJS.particles.move.straight){
      this.vx = velbase.x;
      this.vy = velbase.y;
      if(pJS.particles.move.random){
        this.vx = this.vx * (Math.random());
        this.vy = this.vy * (Math.random());
      }
    }else{
      this.vx = velbase.x + Math.random()-0.5;
      this.vy = velbase.y + Math.random()-0.5;
    }

    // var theta = 2.0 * Math.PI * Math.random();
    // this.vx = Math.cos(theta);
    // this.vy = Math.sin(theta);

    this.vx_i = this.vx;
    this.vy_i = this.vy;

    

    /* if shape is image */

    var shape_type = pJS.particles.shape.type;
    if(typeof(shape_type) == 'object'){
      if(shape_type instanceof Array){
        var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
        this.shape = shape_selected;
      }
    }else{
      this.shape = shape_type;
    }

    if(this.shape == 'image'){
      var sh = pJS.particles.shape;
      this.img = {
        src: sh.image.src,
        ratio: sh.image.width / sh.image.height
      }
      if(!this.img.ratio) this.img.ratio = 1;
      if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg != undefined){
        pJS.fn.vendors.createSvgImg(this);
        if(pJS.tmp.pushing){
          this.img.loaded = false;
        }
      }
    }

    

  };


  pJS.fn.particle.prototype.draw = function() {

    var p = this;

    if(p.radius_bubble != undefined){
      var radius = p.radius_bubble; 
    }else{
      var radius = p.radius;
    }

    if(p.opacity_bubble != undefined){
      var opacity = p.opacity_bubble;
    }else{
      var opacity = p.opacity;
    }

    if(p.color.rgb){
      var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+opacity+')';
    }else{
      var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+opacity+')';
    }

    pJS.canvas.ctx.fillStyle = color_value;
    pJS.canvas.ctx.beginPath();

    switch(p.shape){

      case 'circle':
        pJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
      break;

      case 'edge':
        pJS.canvas.ctx.rect(p.x-radius, p.y-radius, radius*2, radius*2);
      break;

      case 'triangle':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x-radius, p.y+radius / 1.66, radius*2, 3, 2);
      break;

      case 'polygon':
        pJS.fn.vendors.drawShape(
          pJS.canvas.ctx,
          p.x - radius / (pJS.particles.shape.polygon.nb_sides/3.5), // startX
          p.y - radius / (2.66/3.5), // startY
          radius*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
          pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
          1 // sideCountDenominator
        );
      break;

      case 'star':
        pJS.fn.vendors.drawShape(
          pJS.canvas.ctx,
          p.x - radius*2 / (pJS.particles.shape.polygon.nb_sides/4), // startX
          p.y - radius / (2*2.66/3.5), // startY
          radius*2*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
          pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
          2 // sideCountDenominator
        );
      break;

      case 'image':

        function draw(){
          pJS.canvas.ctx.drawImage(
            img_obj,
            p.x-radius,
            p.y-radius,
            radius*2,
            radius*2 / p.img.ratio
          );
        }

        if(pJS.tmp.img_type == 'svg'){
          var img_obj = p.img.obj;
        }else{
          var img_obj = pJS.tmp.img_obj;
        }

        if(img_obj){
          draw();
        }

      break;

    }

    pJS.canvas.ctx.closePath();

    if(pJS.particles.shape.stroke.width > 0){
      pJS.canvas.ctx.strokeStyle = pJS.particles.shape.stroke.color;
      pJS.canvas.ctx.lineWidth = pJS.particles.shape.stroke.width;
      pJS.canvas.ctx.stroke();
    }
    
    pJS.canvas.ctx.fill();
    
  };


  pJS.fn.particlesCreate = function(){
    for(var i = 0; i < pJS.particles.number.value; i++) {
      pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value));
    }
  };

  pJS.fn.particlesUpdate = function(){

    for(var i = 0; i < pJS.particles.array.length; i++){

      /* the particle */
      var p = pJS.particles.array[i];

      // var d = ( dx = pJS.interactivity.mouse.click_pos_x - p.x ) * dx + ( dy = pJS.interactivity.mouse.click_pos_y - p.y ) * dy;
      // var f = -BANG_SIZE / d;
      // if ( d < BANG_SIZE ) {
      //     var t = Math.atan2( dy, dx );
      //     p.vx = f * Math.cos(t);
      //     p.vy = f * Math.sin(t);
      // }

      /* move the particle */
      if(pJS.particles.move.enable){
        var ms = pJS.particles.move.speed/2;
        p.x += p.vx * ms;
        p.y += p.vy * ms;
      }

      /* change opacity status */
      if(pJS.particles.opacity.anim.enable) {
        if(p.opacity_status == true) {
          if(p.opacity >= pJS.particles.opacity.value) p.opacity_status = false;
          p.opacity += p.vo;
        }else {
          if(p.opacity <= pJS.particles.opacity.anim.opacity_min) p.opacity_status = true;
          p.opacity -= p.vo;
        }
        if(p.opacity < 0) p.opacity = 0;
      }

      /* change size */
      if(pJS.particles.size.anim.enable){
        if(p.size_status == true){
          if(p.radius >= pJS.particles.size.value) p.size_status = false;
          p.radius += p.vs;
        }else{
          if(p.radius <= pJS.particles.size.anim.size_min) p.size_status = true;
          p.radius -= p.vs;
        }
        if(p.radius < 0) p.radius = 0;
      }

      /* change particle position if it is out of canvas */
      if(pJS.particles.move.out_mode == 'bounce'){
        var new_pos = {
          x_left: p.radius,
          x_right:  pJS.canvas.w,
          y_top: p.radius,
          y_bottom: pJS.canvas.h
        }
      }else{
        var new_pos = {
          x_left: -p.radius,
          x_right: pJS.canvas.w + p.radius,
          y_top: -p.radius,
          y_bottom: pJS.canvas.h + p.radius
        }
      }

      if(p.x - p.radius > pJS.canvas.w){
        p.x = new_pos.x_left;
        p.y = Math.random() * pJS.canvas.h;
      }
      else if(p.x + p.radius < 0){
        p.x = new_pos.x_right;
        p.y = Math.random() * pJS.canvas.h;
      }
      if(p.y - p.radius > pJS.canvas.h){
        p.y = new_pos.y_top;
        p.x = Math.random() * pJS.canvas.w;
      }
      else if(p.y + p.radius < 0){
        p.y = new_pos.y_bottom;
        p.x = Math.random() * pJS.canvas.w;
      }

      /* out of canvas modes */
      switch(pJS.particles.move.out_mode){
        case 'bounce':
          if (p.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
          else if (p.x - p.radius < 0) p.vx = -p.vx;
          if (p.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
          else if (p.y - p.radius < 0) p.vy = -p.vy;
        break;
      }

      /* events */
      if(isInArray('grab', pJS.interactivity.events.onhover.mode)){
        pJS.fn.modes.grabParticle(p);
      }

      if(isInArray('bubble', pJS.interactivity.events.onhover.mode) || isInArray('bubble', pJS.interactivity.events.onclick.mode)){
        pJS.fn.modes.bubbleParticle(p);
      }

      if(isInArray('repulse', pJS.interactivity.events.onhover.mode) || isInArray('repulse', pJS.interactivity.events.onclick.mode)){
        pJS.fn.modes.repulseParticle(p);
      }

      /* interaction auto between particles */
      if(pJS.particles.line_linked.enable || pJS.particles.move.attract.enable){
        for(var j = i + 1; j < pJS.particles.array.length; j++){
          var p2 = pJS.particles.array[j];

          /* link particles */
          if(pJS.particles.line_linked.enable){
            pJS.fn.interact.linkParticles(p,p2);
          }

          /* attract particles */
          if(pJS.particles.move.attract.enable){
            pJS.fn.interact.attractParticles(p,p2);
          }

          /* bounce particles */
          if(pJS.particles.move.bounce){
            pJS.fn.interact.bounceParticles(p,p2);
          }

        }
      }


    }

  };

  pJS.fn.particlesDraw = function(){

    /* clear canvas */
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);

    /* update each particles param */
    pJS.fn.particlesUpdate();

    /* draw each particle */
    for(var i = 0; i < pJS.particles.array.length; i++){
      var p = pJS.particles.array[i];
      p.draw();
    }

  };

  pJS.fn.particlesEmpty = function(){
    pJS.particles.array = [];
  };

  pJS.fn.particlesRefresh = function(){

    /* init all */
    cancelRequestAnimFrame(pJS.fn.checkAnimFrame);
    cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
    pJS.tmp.source_svg = undefined;
    pJS.tmp.img_obj = undefined;
    pJS.tmp.count_svg = 0;
    pJS.fn.particlesEmpty();
    pJS.fn.canvasClear();
    
    /* restart */
    pJS.fn.vendors.start();

  };


  /* ---------- pJS functions - particles interaction ------------ */

  pJS.fn.interact.linkParticles = function(p1, p2){

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

    /* draw a line between p1 and p2 if the distance between them is under the config distance */
    if(dist <= pJS.particles.line_linked.distance){

      var opacity_line = pJS.particles.line_linked.opacity - (dist / (1/pJS.particles.line_linked.opacity)) / pJS.particles.line_linked.distance;

      if(opacity_line > 0){        
        
        /* style */
        var color_line = pJS.particles.line_linked.color_rgb_line;
        pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
        pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
        //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
        
        /* path */
        pJS.canvas.ctx.beginPath();
        pJS.canvas.ctx.moveTo(p1.x, p1.y);
        pJS.canvas.ctx.lineTo(p2.x, p2.y);
        pJS.canvas.ctx.stroke();
        pJS.canvas.ctx.closePath();

      }

    }

  };


  pJS.fn.interact.attractParticles  = function(p1, p2){

    /* condensed particles */
    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

    if(dist <= pJS.particles.line_linked.distance){

      var ax = dx/(pJS.particles.move.attract.rotateX*1000),
          ay = dy/(pJS.particles.move.attract.rotateY*1000);

      p1.vx -= ax;
      p1.vy -= ay;

      p2.vx += ax;
      p2.vy += ay;

    }
    

  }


  pJS.fn.interact.bounceParticles = function(p1, p2){

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy),
        dist_p = p1.radius+p2.radius;

    if(dist <= dist_p){
      p1.vx = -p1.vx;
      p1.vy = -p1.vy;

      p2.vx = -p2.vx;
      p2.vy = -p2.vy;
    }

  }


  /* ---------- pJS functions - modes events ------------ */

  pJS.fn.modes.pushParticles = function(nb, pos){

    pJS.tmp.pushing = true;

    for(var i = 0; i < nb; i++){
      pJS.particles.array.push(
        new pJS.fn.particle(
          pJS.particles.color,
          pJS.particles.opacity.value,
          {
            'x': pos ? pos.pos_x : Math.random() * pJS.canvas.w,
            'y': pos ? pos.pos_y : Math.random() * pJS.canvas.h
          }
        )
      )
      if(i == nb-1){
        if(!pJS.particles.move.enable){
          pJS.fn.particlesDraw();
        }
        pJS.tmp.pushing = false;
      }
    }

  };


  pJS.fn.modes.removeParticles = function(nb){

    pJS.particles.array.splice(0, nb);
    if(!pJS.particles.move.enable){
      pJS.fn.particlesDraw();
    }

  };


  pJS.fn.modes.bubbleParticle = function(p){

    /* on hover event */
    if(pJS.interactivity.events.onhover.enable && isInArray('bubble', pJS.interactivity.events.onhover.mode)){

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
          ratio = 1 - dist_mouse / pJS.interactivity.modes.bubble.distance;

      function init(){
        p.opacity_bubble = p.opacity;
        p.radius_bubble = p.radius;
      }

      /* mousemove - check ratio */
      if(dist_mouse <= pJS.interactivity.modes.bubble.distance){

        if(ratio >= 0 && pJS.interactivity.status == 'mousemove'){
          
          /* size */
          if(pJS.interactivity.modes.bubble.size != pJS.particles.size.value){

            if(pJS.interactivity.modes.bubble.size > pJS.particles.size.value){
              var size = p.radius + (pJS.interactivity.modes.bubble.size*ratio);
              if(size >= 0){
                p.radius_bubble = size;
              }
            }else{
              var dif = p.radius - pJS.interactivity.modes.bubble.size,
                  size = p.radius - (dif*ratio);
              if(size > 0){
                p.radius_bubble = size;
              }else{
                p.radius_bubble = 0;
              }
            }

          }

          /* opacity */
          if(pJS.interactivity.modes.bubble.opacity != pJS.particles.opacity.value){

            if(pJS.interactivity.modes.bubble.opacity > pJS.particles.opacity.value){
              var opacity = pJS.interactivity.modes.bubble.opacity*ratio;
              if(opacity > p.opacity && opacity <= pJS.interactivity.modes.bubble.opacity){
                p.opacity_bubble = opacity;
              }
            }else{
              var opacity = p.opacity - (pJS.particles.opacity.value-pJS.interactivity.modes.bubble.opacity)*ratio;
              if(opacity < p.opacity && opacity >= pJS.interactivity.modes.bubble.opacity){
                p.opacity_bubble = opacity;
              }
            }

          }

        }

      }else{
        init();
      }


      /* mouseleave */
      if(pJS.interactivity.status == 'mouseleave'){
        init();
      }
    
    }

    /* on click event */
    else if(pJS.interactivity.events.onclick.enable && isInArray('bubble', pJS.interactivity.events.onclick.mode)){


      if(pJS.tmp.bubble_clicking){
        var dx_mouse = p.x - pJS.interactivity.mouse.click_pos_x,
            dy_mouse = p.y - pJS.interactivity.mouse.click_pos_y,
            dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
            time_spent = (new Date().getTime() - pJS.interactivity.mouse.click_time)/1000;

        if(time_spent > pJS.interactivity.modes.bubble.duration){
          pJS.tmp.bubble_duration_end = true;
        }

        if(time_spent > pJS.interactivity.modes.bubble.duration*2){
          pJS.tmp.bubble_clicking = false;
          pJS.tmp.bubble_duration_end = false;
        }
      }


      function process(bubble_param, particles_param, p_obj_bubble, p_obj, id){

        if(bubble_param != particles_param){

          if(!pJS.tmp.bubble_duration_end){
            if(dist_mouse <= pJS.interactivity.modes.bubble.distance){
              if(p_obj_bubble != undefined) var obj = p_obj_bubble;
              else var obj = p_obj;
              if(obj != bubble_param){
                var value = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration);
                if(id == 'size') p.radius_bubble = value;
                if(id == 'opacity') p.opacity_bubble = value;
              }
            }else{
              if(id == 'size') p.radius_bubble = undefined;
              if(id == 'opacity') p.opacity_bubble = undefined;
            }
          }else{
            if(p_obj_bubble != undefined){
              var value_tmp = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration),
                  dif = bubble_param - value_tmp;
                  value = bubble_param + dif;
              if(id == 'size') p.radius_bubble = value;
              if(id == 'opacity') p.opacity_bubble = value;
            }
          }

        }

      }

      if(pJS.tmp.bubble_clicking){
        /* size */
        process(pJS.interactivity.modes.bubble.size, pJS.particles.size.value, p.radius_bubble, p.radius, 'size');
        /* opacity */
        process(pJS.interactivity.modes.bubble.opacity, pJS.particles.opacity.value, p.opacity_bubble, p.opacity, 'opacity');
      }

    }

  };


  pJS.fn.modes.repulseParticle = function(p){

    if(pJS.interactivity.events.onhover.enable && isInArray('repulse', pJS.interactivity.events.onhover.mode) && pJS.interactivity.status == 'mousemove') {

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);

      var normVec = {x: dx_mouse/dist_mouse, y: dy_mouse/dist_mouse},
          repulseRadius = pJS.interactivity.modes.repulse.distance,
          velocity = 100,
          repulseFactor = clamp((1/repulseRadius)*(-1*Math.pow(dist_mouse/repulseRadius,2)+1)*repulseRadius*velocity, 0, 50);
      
      var pos = {
        x: p.x + normVec.x * repulseFactor,
        y: p.y + normVec.y * repulseFactor
      }

      if(pJS.particles.move.out_mode == 'bounce'){
        if(pos.x - p.radius > 0 && pos.x + p.radius < pJS.canvas.w) p.x = pos.x;
        if(pos.y - p.radius > 0 && pos.y + p.radius < pJS.canvas.h) p.y = pos.y;
      }else{
        p.x = pos.x;
        p.y = pos.y;
      }
    
    }


    else if(pJS.interactivity.events.onclick.enable && isInArray('repulse', pJS.interactivity.events.onclick.mode)) {

      if(!pJS.tmp.repulse_finish){
        pJS.tmp.repulse_count++;
        if(pJS.tmp.repulse_count == pJS.particles.array.length){
          pJS.tmp.repulse_finish = true;
        }
      }

      if(pJS.tmp.repulse_clicking){

        var repulseRadius = Math.pow(pJS.interactivity.modes.repulse.distance/6, 3);

        var dx = pJS.interactivity.mouse.click_pos_x - p.x,
            dy = pJS.interactivity.mouse.click_pos_y - p.y,
            d = dx*dx + dy*dy;

        var force = -repulseRadius / d * 1;

        function process(){

          var f = Math.atan2(dy,dx);
          p.vx = force * Math.cos(f);
          p.vy = force * Math.sin(f);

          if(pJS.particles.move.out_mode == 'bounce'){
            var pos = {
              x: p.x + p.vx,
              y: p.y + p.vy
            }
            if (pos.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
            else if (pos.x - p.radius < 0) p.vx = -p.vx;
            if (pos.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
            else if (pos.y - p.radius < 0) p.vy = -p.vy;
          }

        }

        // default
        if(d <= repulseRadius){
          process();
        }

        // bang - slow motion mode
        // if(!pJS.tmp.repulse_finish){
        //   if(d <= repulseRadius){
        //     process();
        //   }
        // }else{
        //   process();
        // }
        

      }else{

        if(pJS.tmp.repulse_clicking == false){

          p.vx = p.vx_i;
          p.vy = p.vy_i;
        
        }

      }

    }

  }


  pJS.fn.modes.grabParticle = function(p){

    if(pJS.interactivity.events.onhover.enable && pJS.interactivity.status == 'mousemove'){

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);

      /* draw a line between the cursor and the particle if the distance between them is under the config distance */
      if(dist_mouse <= pJS.interactivity.modes.grab.distance){

        var opacity_line = pJS.interactivity.modes.grab.line_linked.opacity - (dist_mouse / (1/pJS.interactivity.modes.grab.line_linked.opacity)) / pJS.interactivity.modes.grab.distance;

        if(opacity_line > 0){

          /* style */
          var color_line = pJS.particles.line_linked.color_rgb_line;
          pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
          pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
          //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
          
          /* path */
          pJS.canvas.ctx.beginPath();
          pJS.canvas.ctx.moveTo(p.x, p.y);
          pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y);
          pJS.canvas.ctx.stroke();
          pJS.canvas.ctx.closePath();

        }

      }

    }

  };



  /* ---------- pJS functions - vendors ------------ */

  pJS.fn.vendors.eventsListeners = function(){

    /* events target element */
    if(pJS.interactivity.detect_on == 'window'){
      pJS.interactivity.el = window;
    }else{
      pJS.interactivity.el = pJS.canvas.el;
    }


    /* detect mouse pos - on hover / click event */
    if(pJS.interactivity.events.onhover.enable || pJS.interactivity.events.onclick.enable){

      /* el on mousemove */
      pJS.interactivity.el.addEventListener('mousemove', function(e){

        if(pJS.interactivity.el == window){
          var pos_x = e.clientX,
              pos_y = e.clientY;
        }
        else{
          var pos_x = e.offsetX || e.clientX,
              pos_y = e.offsetY || e.clientY;
        }

        pJS.interactivity.mouse.pos_x = pos_x;
        pJS.interactivity.mouse.pos_y = pos_y;

        if(pJS.tmp.retina){
          pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;
          pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio;
        }

        pJS.interactivity.status = 'mousemove';

      });

      /* el on onmouseleave */
      pJS.interactivity.el.addEventListener('mouseleave', function(e){

        pJS.interactivity.mouse.pos_x = null;
        pJS.interactivity.mouse.pos_y = null;
        pJS.interactivity.status = 'mouseleave';

      });

    }

    /* on click event */
    if(pJS.interactivity.events.onclick.enable){

      pJS.interactivity.el.addEventListener('click', function(){

        pJS.interactivity.mouse.click_pos_x = pJS.interactivity.mouse.pos_x;
        pJS.interactivity.mouse.click_pos_y = pJS.interactivity.mouse.pos_y;
        pJS.interactivity.mouse.click_time = new Date().getTime();

        if(pJS.interactivity.events.onclick.enable){

          switch(pJS.interactivity.events.onclick.mode){

            case 'push':
              if(pJS.particles.move.enable){
                pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
              }else{
                if(pJS.interactivity.modes.push.particles_nb == 1){
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                }
                else if(pJS.interactivity.modes.push.particles_nb > 1){
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb);
                }
              }
            break;

            case 'remove':
              pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb);
            break;

            case 'bubble':
              pJS.tmp.bubble_clicking = true;
            break;

            case 'repulse':
              pJS.tmp.repulse_clicking = true;
              pJS.tmp.repulse_count = 0;
              pJS.tmp.repulse_finish = false;
              setTimeout(function(){
                pJS.tmp.repulse_clicking = false;
              }, pJS.interactivity.modes.repulse.duration*1000)
            break;

          }

        }

      });
        
    }


  };

  pJS.fn.vendors.densityAutoParticles = function(){

    if(pJS.particles.number.density.enable){

      /* calc area */
      var area = pJS.canvas.el.width * pJS.canvas.el.height / 1000;
      if(pJS.tmp.retina){
        area = area/(pJS.canvas.pxratio*2);
      }

      /* calc number of particles based on density area */
      var nb_particles = area * pJS.particles.number.value / pJS.particles.number.density.value_area;

      /* add or remove X particles */
      var missing_particles = pJS.particles.array.length - nb_particles;
      if(missing_particles < 0) pJS.fn.modes.pushParticles(Math.abs(missing_particles));
      else pJS.fn.modes.removeParticles(missing_particles);

    }

  };


  pJS.fn.vendors.checkOverlap = function(p1, position){
    for(var i = 0; i < pJS.particles.array.length; i++){
      var p2 = pJS.particles.array[i];

      var dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dist = Math.sqrt(dx*dx + dy*dy);

      if(dist <= p1.radius + p2.radius){
        p1.x = position ? position.x : Math.random() * pJS.canvas.w;
        p1.y = position ? position.y : Math.random() * pJS.canvas.h;
        pJS.fn.vendors.checkOverlap(p1);
      }
    }
  };


  pJS.fn.vendors.createSvgImg = function(p){

    /* set color to svg element */
    var svgXml = pJS.tmp.source_svg,
        rgbHex = /#([0-9A-F]{3,6})/gi,
        coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
          if(p.color.rgb){
            var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+p.opacity+')';
          }else{
            var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+p.opacity+')';
          }
          return color_value;
        });

    /* prepare to create img with colored svg */
    var svg = new Blob([coloredSvgXml], {type: 'image/svg+xml;charset=utf-8'}),
        DOMURL = window.URL || window.webkitURL || window,
        url = DOMURL.createObjectURL(svg);

    /* create particle img obj */
    var img = new Image();
    img.addEventListener('load', function(){
      p.img.obj = img;
      p.img.loaded = true;
      DOMURL.revokeObjectURL(url);
      pJS.tmp.count_svg++;
    });
    img.src = url;

  };


  pJS.fn.vendors.destroypJS = function(){
    cancelAnimationFrame(pJS.fn.drawAnimFrame);
    canvas_el.remove();
    pJSDom = null;
  };


  pJS.fn.vendors.drawShape = function(c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator){

    // By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
    var sideCount = sideCountNumerator * sideCountDenominator;
    var decimalSides = sideCountNumerator / sideCountDenominator;
    var interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
    var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians
    c.save();
    c.beginPath();
    c.translate(startX, startY);
    c.moveTo(0,0);
    for (var i = 0; i < sideCount; i++) {
      c.lineTo(sideLength,0);
      c.translate(sideLength,0);
      c.rotate(interiorAngle);
    }
    //c.stroke();
    c.fill();
    c.restore();

  };

  pJS.fn.vendors.exportImg = function(){
    window.open(pJS.canvas.el.toDataURL('image/png'), '_blank');
  };


  pJS.fn.vendors.loadImg = function(type){

    pJS.tmp.img_error = undefined;

    if(pJS.particles.shape.image.src != ''){

      if(type == 'svg'){

        var xhr = new XMLHttpRequest();
        xhr.open('GET', pJS.particles.shape.image.src);
        xhr.onreadystatechange = function (data) {
          if(xhr.readyState == 4){
            if(xhr.status == 200){
              pJS.tmp.source_svg = data.currentTarget.response;
              pJS.fn.vendors.checkBeforeDraw();
            }else{
              console.log('Error pJS - Image not found');
              pJS.tmp.img_error = true;
            }
          }
        }
        xhr.send();

      }else{

        var img = new Image();
        img.addEventListener('load', function(){
          pJS.tmp.img_obj = img;
          pJS.fn.vendors.checkBeforeDraw();
        });
        img.src = pJS.particles.shape.image.src;

      }

    }else{
      console.log('Error pJS - No image.src');
      pJS.tmp.img_error = true;
    }

  };


  pJS.fn.vendors.draw = function(){

    if(pJS.particles.shape.type == 'image'){

      if(pJS.tmp.img_type == 'svg'){

        if(pJS.tmp.count_svg >= pJS.particles.number.value){
          pJS.fn.particlesDraw();
          if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
          else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }else{
          //console.log('still loading...');
          if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }

      }else{

        if(pJS.tmp.img_obj != undefined){
          pJS.fn.particlesDraw();
          if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
          else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }else{
          if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }

      }

    }else{
      pJS.fn.particlesDraw();
      if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
      else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
    }

  };


  pJS.fn.vendors.checkBeforeDraw = function(){

    // if shape is image
    if(pJS.particles.shape.type == 'image'){

      if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg == undefined){
        pJS.tmp.checkAnimFrame = requestAnimFrame(check);
      }else{
        //console.log('images loaded! cancel check');
        cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);
        if(!pJS.tmp.img_error){
          pJS.fn.vendors.init();
          pJS.fn.vendors.draw();
        }
        
      }

    }else{
      pJS.fn.vendors.init();
      pJS.fn.vendors.draw();
    }

  };


  pJS.fn.vendors.init = function(){

    /* init canvas + particles */
    pJS.fn.retinaInit();
    pJS.fn.canvasInit();
    pJS.fn.canvasSize();
    pJS.fn.canvasPaint();
    pJS.fn.particlesCreate();
    pJS.fn.vendors.densityAutoParticles();

    /* particles.line_linked - convert hex colors to rgb */
    pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color);

  };


  pJS.fn.vendors.start = function(){

    if(isInArray('image', pJS.particles.shape.type)){
      pJS.tmp.img_type = pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length - 3);
      pJS.fn.vendors.loadImg(pJS.tmp.img_type);
    }else{
      pJS.fn.vendors.checkBeforeDraw();
    }

  };




  /* ---------- pJS - start ------------ */


  pJS.fn.vendors.eventsListeners();

  pJS.fn.vendors.start();
  


};

/* ---------- global functions - vendors ------------ */

Object.deepExtend = function(destination, source) {
  for (var property in source) {
    if (source[property] && source[property].constructor &&
     source[property].constructor === Object) {
      destination[property] = destination[property] || {};
      arguments.callee(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }
  return destination;
};

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function(callback){
      window.setTimeout(callback, 1000 / 60);
    };
})();

window.cancelRequestAnimFrame = ( function() {
  return window.cancelAnimationFrame         ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame    ||
    window.oCancelRequestAnimationFrame      ||
    window.msCancelRequestAnimationFrame     ||
    clearTimeout
} )();

function hexToRgb(hex){
  // By Tim Down - http://stackoverflow.com/a/5624139/3493650
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
     return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null;
};

function clamp(number, min, max) {
  return Math.min(Math.max(number, min), max);
};

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}


/* ---------- particles.js functions - start ------------ */

window.pJSDom = [];

window.particlesJS = function(tag_id, params){

  //console.log(params);

  /* no string id? so it's object params, and set the id with default id */
  if(typeof(tag_id) != 'string'){
    params = tag_id;
    tag_id = 'particles-js';
  }

  /* no id? set the id to default id */
  if(!tag_id){
    tag_id = 'particles-js';
  }

  /* pJS elements */
  var pJS_tag = document.getElementById(tag_id),
      pJS_canvas_class = 'particles-js-canvas-el',
      exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);

  /* remove canvas if exists into the pJS target tag */
  if(exist_canvas.length){
    while(exist_canvas.length > 0){
      pJS_tag.removeChild(exist_canvas[0]);
    }
  }

  /* create canvas element */
  var canvas_el = document.createElement('canvas');
  canvas_el.className = pJS_canvas_class;

  /* set size canvas */
  canvas_el.style.width = "100%";
  canvas_el.style.height = "100%";

  /* append canvas */
  var canvas = document.getElementById(tag_id).appendChild(canvas_el);

  /* launch particle.js */
  if(canvas != null){
    pJSDom.push(new pJS(tag_id, params));
  }

};

window.particlesJS.load = function(tag_id, path_config_json, callback){

  /* load json config */
  var xhr = new XMLHttpRequest();
  xhr.open('GET', path_config_json);
  xhr.onreadystatechange = function (data) {
    if(xhr.readyState == 4){
      if(xhr.status == 200){
        var params = JSON.parse(data.currentTarget.response);
        window.particlesJS(tag_id, params);
        if(callback) callback();
      }else{
        console.log('Error pJS - XMLHttpRequest status: '+xhr.status);
        console.log('Error pJS - File config not found');
      }
    }
  };
  xhr.send();

};

// ============================================================
// CẤU HÌNH & KHỞI CHẠY HIỆU ỨNG DÂY TĨNH ĐIỆN CHO TRANG THÁI CHÂU
// ============================================================
function getParticleConfig(theme) {
  const isDark = theme === "dark";
  const particleColor = isDark ? "#818cf8" : "#6366F1";
  const lineColor = isDark ? "#475569" : "#CBD5E1";
  const lineOpacity = isDark ? 0.35 : 0.6;

  return {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: particleColor },
      shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
      opacity: { value: 0.5, random: false },
      size: { value: 5, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: lineColor,
        opacity: lineOpacity,
        width: 1,
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
      },
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 180 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  };
}

function loadParticles() {
  if (typeof particlesJS === "undefined") return;
  const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
  particlesJS("particles-js", getParticleConfig(currentTheme));
}

let mouseListenerAttached = false;
function attachAboutMouseListener() {
  if (mouseListenerAttached) return;
  const aboutSec = document.querySelector(".about-section");
  if (!aboutSec) return;

  aboutSec.addEventListener("mousemove", (e) => {
    if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
      const pJS = window.pJSDom[0].pJS;
      const rect = aboutSec.getBoundingClientRect();
      const scale = pJS.tmp.retina ? pJS.canvas.pxratio : 1;
      pJS.interactivity.mouse.pos_x = (e.clientX - rect.left) * scale;
      pJS.interactivity.mouse.pos_y = (e.clientY - rect.top) * scale;
      pJS.interactivity.status = "mousemove";
    }
  });

  aboutSec.addEventListener("mouseleave", () => {
    if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
      const pJS = window.pJSDom[0].pJS;
      pJS.interactivity.mouse.pos_x = null;
      pJS.interactivity.mouse.pos_y = null;
      pJS.interactivity.status = "mouseleave";
    }
  });

  mouseListenerAttached = true;
}

// Observer cập nhật màu hạt khi đổi chế độ Sáng / Tối
const themeObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.attributeName === "data-theme") {
      loadParticles();
    }
  });
});
themeObserver.observe(document.documentElement, { attributes: true });

// ============================================================
// 2. HÀM HỖ TRỢ: BIỂU TƯỢNG SVG & TẠO CHỮ VIẾT TẮT KỸ NĂNG
// ============================================================
function getSocialIcon(iconName) {
  const icons = {
    github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    twitter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`,
    email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  };
  return icons[iconName] || icons.github;
}

function getSkillAbbreviation(skillName) {
  const words = skillName.split(/[\s\/&]+/);
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return skillName.substring(0, 2).toUpperCase();
}

// ============================================================
// 3. ĐỔ DỮ LIỆU VÀO TRANG (Từ portfolioData vào giao diện HTML)
// ============================================================
function populatePage() {
  const data = portfolioData;

  // Màu sắc chủ đạo được quản lý linh hoạt trong CSS theo chế độ Sáng / Tối (Dark / Light)

  // Cập nhật tiêu đề trang web
  document.title = `${data.name} — Portfolio`;

  // Logo trên thanh điều hướng
  const navLogo = document.querySelector(".nav-logo-text");
  if (navLogo) navLogo.textContent = data.firstName || data.name;

  // Phần giới thiệu bản thân (About Section)
  // Xóa dữ liệu ảnh cũ trong localStorage (nếu có từ trước) để luôn dùng ảnh có sẵn trong thư mục images
  localStorage.removeItem("portfolio-avatar");

  const avatarEl = document.getElementById("aboutAvatar");
  if (avatarEl && data.about && data.about.avatar) {
    avatarEl.src = data.about.avatar;
  }

  const aboutDesc = document.getElementById("aboutDescription");
  if (aboutDesc && data.about) {
    aboutDesc.textContent = data.about.description;
  }

  // Các thông tin nổi bật (Highlights)
  const highlightsContainer = document.getElementById("aboutHighlights");
  if (highlightsContainer && data.about && data.about.highlights) {
    highlightsContainer.innerHTML = "";
    data.about.highlights.forEach((item) => {
      const card = document.createElement("div");
      card.className = "highlight-card reveal-up";
      card.innerHTML = `
        <p class="highlight-label">${item.label}</p>
        <p class="highlight-value">${item.value}</p>
      `;
      highlightsContainer.appendChild(card);
    });
  }

  // Dòng chữ kỹ năng chạy ngang (Marquee)
  const marqueeContent = document.getElementById("marqueeContent");
  if (marqueeContent && data.skills) {
    let skillNames = [];
    if (Array.isArray(data.skills)) {
      skillNames = data.skills.map((s) => s.name || s);
    } else {
      const tech = (data.skills.technical || []).map((s) => s.name);
      const tools = (data.skills.tools || []).map((t) => (typeof t === "string" ? t : t.name));
      skillNames = [...tech, ...tools];
    }
    const marqueeHTML = [...skillNames, ...skillNames]
      .map((name) => `<span class="marquee-item">${name}</span><span class="marquee-dot"></span>`)
      .join("");
    marqueeContent.innerHTML = marqueeHTML;
  }

  // Danh sách kỹ năng chuyên môn (Technical Skills)
  const techList = document.getElementById("technicalSkillsList");
  if (techList && data.skills) {
    const techSkills = Array.isArray(data.skills)
      ? data.skills.map((s) => ({
          name: s.name,
          level: typeof s.level === "number" && s.level <= 5 ? s.level * 20 : s.level,
        }))
      : data.skills.technical || [];

    if (techSkills.length > 0) {
      techList.innerHTML = techSkills
        .map(
          (skill) => `
        <div class="skill-simple-item" data-level="${skill.level}">
          <div class="skill-simple-header">
            <span class="skill-simple-name">
              ${skill.icon ? `<span class="skill-icon-box"><img src="${skill.icon}" alt="${skill.name}" /></span>` : ""}
              <span>${skill.name}</span>
            </span>
            <span class="skill-simple-pct">${skill.level}%</span>
          </div>
          <div class="skill-simple-track">
            <div class="skill-simple-fill"></div>
          </div>
        </div>
      `
        )
        .join("");
    }
  }

  // Danh sách Công cụ (Tools)
  const toolsList = document.getElementById("toolsSkillsList");
  if (toolsList && data.skills && data.skills.tools) {
    const toolIconFallback = {
      "Antigravity": "../images/chau/skills/antigravity.png",
      "Git & GitHub": "../images/chau/skills/github.png",
      "PostgreSQL": "../images/chau/skills/postgresql.png",
      "Jira": "../images/chau/skills/jira.png",
      "Figma": "../images/chau/skills/figma.svg",
      "Claude": "../images/chau/skills/claude.png",
      "Canva": "../images/chau/skills/canva.svg",
    };

    toolsList.innerHTML = data.skills.tools
      .map((item) => {
        const name = typeof item === "string" ? item : item.name;
        const icon = (typeof item === "object" && item.icon) ? item.icon : (toolIconFallback[name] || "");
        const iconHtml = icon
          ? `<span class="tag-icon-box"><img src="${icon}" alt="${name}" /></span>`
          : `<span class="tag-dot"></span>`;
        return `<span class="simple-tag">${iconHtml}<span>${name}</span></span>`;
      })
      .join("");
  }

  // Danh sách Kỹ năng mềm (Soft Skills)
  const softList = document.getElementById("softSkillsList");
  if (softList && data.skills && data.skills.soft) {
    softList.innerHTML = data.skills.soft
      .map((item) => `<span class="simple-tag">${item}</span>`)
      .join("");
  }

  // Projects — render Project Cards (ảnh nền + thanh tiêu đề vàng + lớp mô tả trượt lên)
  const projectsGrid = document.getElementById("projectsGrid");
  if (projectsGrid && data.projects) {
    projectsGrid.innerHTML = "";
    projectsGrid.classList.add("reveal-stagger");
    data.projects.forEach((project, index) => {
      projectsGrid.appendChild(createProjectCard(project, index));
    });
  }

  // Học vấn & Thành tích (Học vấn, Kinh nghiệm, Dự án, Dạng 3 cột)
  populateQualification(data);

  // Contact — Ưu tiên lấy trực tiếp từ data.js (members[chau].social)
  let contactEmail = data.contact?.email;
  let socialLinks = data.contact?.socialLinks || [];

  if (typeof members !== "undefined" && Array.isArray(members)) {
    const chauData = members.find((m) => m.id === "chau");
    if (chauData && chauData.social) {
      if (chauData.social.email) contactEmail = chauData.social.email;
      const dynamicLinks = [];
      if (chauData.social.github) dynamicLinks.push({ platform: "GitHub", url: chauData.social.github, icon: "github" });
      if (chauData.social.facebook) dynamicLinks.push({ platform: "Facebook", url: chauData.social.facebook, icon: "facebook" });
      if (chauData.social.instagram) dynamicLinks.push({ platform: "Instagram", url: chauData.social.instagram, icon: "instagram" });
      if (chauData.social.linkedin) dynamicLinks.push({ platform: "LinkedIn", url: chauData.social.linkedin, icon: "linkedin" });
      if (chauData.social.twitter) dynamicLinks.push({ platform: "Twitter", url: chauData.social.twitter, icon: "twitter" });
      if (dynamicLinks.length > 0) socialLinks = dynamicLinks;
    }
  }

  const emailEl = document.getElementById("contactEmail");
  if (emailEl && contactEmail) {
    emailEl.href = `mailto:${contactEmail}`;
    const emailText = emailEl.querySelector(".contact-email-text");
    if (emailText) emailText.textContent = contactEmail;
  }

  const socialContainer = document.getElementById("socialLinks");
  if (socialContainer && socialLinks.length > 0) {
    socialContainer.innerHTML = "";
    socialLinks.forEach((link) => {
      if (!link.url) return;
      const a = document.createElement("a");
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.className = "social-link";
      a.setAttribute("aria-label", link.platform);
      a.innerHTML = `${getSocialIcon(link.icon || link.platform.toLowerCase())}<span>${link.platform}</span>`;
      socialContainer.appendChild(a);
    });
  }

  // Thông tin chân trang (Footer)
  const footerName = document.getElementById("footerName");
  if (footerName) footerName.textContent = data.name;
  const footerYear = document.getElementById("footerYear");
  if (footerYear) footerYear.textContent = `© ${new Date().getFullYear()}`;

  // Khởi tạo menu điều hướng cho thiết bị di động
  const mobileNavLinks = document.getElementById("mobileNavLinks");
  if (mobileNavLinks) {
    mobileNavLinks.innerHTML = "";
    const navItems = [
      { id: "about", label: "Giới thiệu" },
      { id: "skills", label: "Kỹ năng" },
      { id: "projects", label: "Dự án" },
      { id: "education", label: "Hành trình" },
      { id: "contact", label: "Liên hệ" },
    ];
    navItems.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = `#${item.id}`;
      a.textContent = item.label;
      a.addEventListener("click", () => closeMobileMenu());
      li.appendChild(a);
      mobileNavLinks.appendChild(li);
    });
    const liHome = document.createElement("li");
    const aHome = document.createElement("a");
    aHome.href = "../index.html";
    aHome.textContent = "← Về trang nhóm";
    aHome.style.color = "var(--accent)";
    liHome.appendChild(aHome);
    mobileNavLinks.appendChild(liHome);
  }
}

// ============================================================
// 3b. XỬ LÝ CÁC THẺ DỰ ÁN (PROJECT CARDS)
// ============================================================

/**
 * Tạo phần tử <article> cho một Project Card.
 * Cấu trúc:
 *   .project-card
 *     ├── .project-media      → ảnh chụp dự án (phủ toàn bộ nền thẻ)
 *     ├── .project-bar        → thanh tiêu đề màu vàng ở đáy thẻ
 *     └── .project-overlay    → nội dung chi tiết, trượt từ dưới lên
 *           ├── tiêu đề
 *           ├── 2 nút "View" & "Code"
 *           └── đoạn mô tả + tags
 */
function createProjectCard(project, index) {
  const card = document.createElement("article");
  card.className = "project-card";
  card.tabIndex = 0; // cho phép focus bằng bàn phím
  card.setAttribute("role", "button");
  card.setAttribute("aria-expanded", "false");
  card.setAttribute("aria-label", `Xem chi tiết dự án ${project.title}`);

  const overlayId = `project-overlay-${index}`;
  card.setAttribute("aria-controls", overlayId);

  // Link thật thì mở tab mới, link "#" thì giữ nguyên
  const linkAttrs = (url) =>
    url && url !== "#" ? `href="${url}" target="_blank" rel="noopener noreferrer"` : `href="#"`;

  card.innerHTML = `
    <!-- Ảnh nền dự án -->
    <div class="project-media">
      <img src="${project.image}" alt="Ảnh chụp dự án ${project.title}" loading="lazy" />
    </div>

    <!-- Thanh tiêu đề màu vàng -->
    <div class="project-bar">
      <h3 class="project-bar-title">${project.title}</h3>
    </div>

    <!-- Lớp nội dung trượt lên -->
    <div class="project-overlay" id="${overlayId}">
      <h3 class="project-overlay-title">${project.title}</h3>

      <div class="project-actions">
        <a ${linkAttrs(project.codeLink)} class="project-btn project-btn--primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>
          </svg>
          Code
        </a>
      </div>

      <p class="project-overlay-desc">${project.description}</p>

      ${
        project.tags && project.tags.length
          ? `<div class="project-tags">
               ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
             </div>`
          : ""
      }
    </div>
  `;

  // Fallback: nếu ảnh lỗi/thiếu → hiển thị nền gradient thay thế
  const img = card.querySelector(".project-media img");
  img.addEventListener("error", () => {
    card.querySelector(".project-media").classList.add("is-fallback");
    img.remove();
  });

  return card;
}

/**
 * Gắn sự kiện bật/tắt cho Project Card.
 * - Desktop: hover tự hiển thị (CSS), click cũng bật/tắt được.
 * - Mobile/Tablet: click (tap) để bật/tắt mô tả.
 * - Bàn phím: Enter / Space để bật/tắt, Esc để đóng.
 * - Chỉ mở 1 thẻ tại một thời điểm; click ra ngoài sẽ đóng thẻ.
 */
function initProjectCards() {
  const cards = document.querySelectorAll(".project-card");
  if (!cards.length) return;

  const setActive = (card, isActive) => {
    card.classList.toggle("is-active", isActive);
    card.setAttribute("aria-expanded", String(isActive));
  };

  const closeAll = (except) => {
    cards.forEach((c) => c !== except && setActive(c, false));
  };

  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      // Nhấn vào nút View/Code thì không bật/tắt thẻ
      const btn = e.target.closest(".project-btn");
      if (btn) {
        // Link chưa có (href="#") → chặn nhảy lên đầu trang
        if (btn.getAttribute("href") === "#") e.preventDefault();
        return;
      }
      const willOpen = !card.classList.contains("is-active");
      closeAll(card);
      setActive(card, willOpen);
    });

    card.addEventListener("keydown", (e) => {
      if (e.target !== card) return; // bỏ qua khi focus đang ở nút bên trong
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.click();
      } else if (e.key === "Escape") {
        setActive(card, false);
      }
    });
  });

  // Click ra ngoài bất kỳ thẻ nào → đóng tất cả
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".project-card")) closeAll(null);
  });
}

// ============================================================
// 4. DÒNG THỜI GIAN & CÁC TAB HỌC VẤN / HÀNH TRÌNH
// ============================================================
function populateQualification(data) {
  const qual = data.qualification || {
    education: data.education || [],
    work: [],
    projects: data.projects || [],
  };

  function buildTimeline(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container || !items) return;
    container.innerHTML = "";

    items.forEach((item, index) => {
      const isLeft = index % 2 === 0;
      const isLast = index === items.length - 1;

      const row = document.createElement("div");
      row.className = "qualification-data reveal-up";

      const itemContent = `
        <div class="qualification-item ${isLeft ? "qualification-item--left" : "qualification-item--right"}">
          <div class="qualification-card">
            <h3 class="qualification-title">${item.title || item.degree}</h3>
            ${(item.subtitle || item.institution) ? `<span class="qualification-subtitle">${item.subtitle || item.institution}</span>` : ""}
            <div class="qualification-calendar">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span>${item.duration}</span>
            </div>
            ${item.description ? `<p class="qualification-desc">${item.description}</p>` : ""}
          </div>
        </div>
      `;

      const divider = `
        <div class="qualification-divider">
          <span class="qualification-rounder"></span>
          ${!isLast ? '<span class="qualification-line"></span>' : ""}
        </div>
      `;

      if (isLeft) {
        row.innerHTML = `
          ${itemContent}
          ${divider}
          <div></div>
        `;
      } else {
        row.innerHTML = `
          <div></div>
          ${divider}
          ${itemContent}
        `;
      }

      container.appendChild(row);
    });
  }

  buildTimeline("timelineEducation", qual.education);
  buildTimeline("timelineWork", qual.work);
  buildTimeline("timelineProjects", qual.projects);

  const colGrid = document.getElementById("timeline3Col");
  if (colGrid) {
    colGrid.innerHTML = `
      <!-- Cột Học vấn -->
      <div class="qualification-col reveal-up">
        <div class="qualification-col-header">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
          <h3>Học vấn</h3>
        </div>
        <div class="col-timeline">
          ${(qual.education || [])
            .map(
              (item) => `
            <div class="col-timeline-item">
              <h4>${item.title || item.degree}</h4>
              ${(item.subtitle || item.institution) ? `<p class="col-subtitle">${item.subtitle || item.institution}</p>` : ""}
              <span class="col-date">📅 ${item.duration}</span>
              ${item.description ? `<p class="col-desc">${item.description}</p>` : ""}
            </div>
          `
            )
            .join("")}
        </div>
      </div>

      <!-- Cột Kinh nghiệm / Thành tích -->
      <div class="qualification-col reveal-up">
        <div class="qualification-col-header">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          </svg>
          <h3>Kinh nghiệm</h3>
        </div>
        <div class="col-timeline">
          ${(qual.work || [])
            .map(
              (item) => `
            <div class="col-timeline-item">
              <h4>${item.title}</h4>
              ${item.subtitle ? `<p class="col-subtitle">${item.subtitle}</p>` : ""}
              <span class="col-date">📅 ${item.duration}</span>
              ${item.description ? `<p class="col-desc">${item.description}</p>` : ""}
            </div>
          `
            )
            .join("")}
        </div>
      </div>

      <!-- Cột Dự án -->
      <div class="qualification-col reveal-up">
        <div class="qualification-col-header">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
          </svg>
          <h3>Dự án</h3>
        </div>
        <div class="col-timeline">
          ${(qual.projects || [])
            .map(
              (item) => `
            <div class="col-timeline-item">
              <h4>${item.title}</h4>
              ${item.subtitle ? `<p class="col-subtitle">${item.subtitle}</p>` : ""}
              <span class="col-date">📅 ${item.duration}</span>
              ${item.description ? `<p class="col-desc">${item.description}</p>` : ""}
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }
}

function initQualificationTabs() {
  const tabs = document.querySelectorAll(".qualification-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const target = tab.getAttribute("data-target");
      document.querySelectorAll(".qualification-content").forEach((content) => {
        content.classList.remove("active");
      });

      const activeContent = document.getElementById(`qual-${target}`);
      if (activeContent) {
        activeContent.classList.add("active");
      }
    });
  });
}

// ============================================================
// 5. CON TRỎ CHUỘT TÙY BIẾN (CUSTOM CURSOR)
// ============================================================
function initCustomCursor() {
  if (window.matchMedia("(hover: none)").matches) return;

  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";
    requestAnimationFrame(animateRing);
  }
  animateRing();

  const hoverTargets = document.querySelectorAll(
    "a, button, .project-card, .skill-card, .highlight-card, .qualification-tab, .qualification-data"
  );
  hoverTargets.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      dot.classList.add("hovering");
      ring.classList.add("hovering");
    });
    el.addEventListener("mouseleave", () => {
      dot.classList.remove("hovering");
      ring.classList.remove("hovering");
    });
  });
}

// ============================================================
// 6. THANH ĐIỀU HƯỚNG & THEO DÕI VỊ TRÍ CUỘN TRANG (SCROLL SPY)
// ============================================================
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }
  });

  const observerOptions = {
    root: null,
    rootMargin: "-30% 0px -70% 0px",
    threshold: 0,
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("data-section") === sectionId);
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => navObserver.observe(section));
}

// ============================================================
// 7. MENU ĐIỀU HƯỚNG CHO THIẾT BỊ DI ĐỘNG (MOBILE MENU)
// ============================================================
function initMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    document.body.style.overflow = mobileMenu.classList.contains("active") ? "hidden" : "";
  });
}

function closeMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  if (hamburger) hamburger.classList.remove("active");
  if (mobileMenu) mobileMenu.classList.remove("active");
  document.body.style.overflow = "";
}

// ============================================================
// 8. HIỆU ỨNG HIỂN THỊ KHI CUỘN TRANG (SCROLL REVEAL ANIMATIONS)
// ============================================================
function initScrollReveal() {
  // Lấy các phần tử có lớp hiệu ứng .reveal-up hoặc .reveal-stagger
  const revealElements = document.querySelectorAll(".reveal-up, .reveal-stagger");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -20px 0px",
      threshold: 0.05,
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
}

// ============================================================
// KHỞI TẠO HOẠT HỌA THANH TIẾN TRÌNH KỸ NĂNG (ANIMATED NUMBERS & BARS)
// ============================================================
function initSkillBars() {
  const skills = document.querySelectorAll(".skill-simple-item");
  if (!skills.length) return;
  const DURATION = 1200;

  const draw = (skill, value) => {
    const bar = skill.querySelector(".skill-simple-fill");
    const pct = skill.querySelector(".skill-simple-pct");
    if (bar) bar.style.width = value + "%";
    if (pct) pct.textContent = Math.round(value) + "%";
  };

  const play = (skill) => {
    cancelAnimationFrame(skill._raf);
    const target = Number(skill.dataset.level) || 0;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min((now - start) / DURATION, 1);
      const ease = 1 - Math.pow(1 - t, 4);
      draw(skill, target * ease);
      if (t < 1) {
        skill._raf = requestAnimationFrame(step);
      }
    };
    skill._raf = requestAnimationFrame(step);
  };

  const reset = (skill) => {
    cancelAnimationFrame(skill._raf);
    draw(skill, 0);
  };

  // Khởi tạo trạng thái ban đầu: 0% cho cả thanh và chữ số
  skills.forEach((s) => {
    const bar = s.querySelector(".skill-simple-fill");
    if (bar) bar.style.transition = "none";
    reset(s);
  });

  // Quan sát khi cuộn vào tầm nhìn: chạy từ 0% -> target% một lần êm ái
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          play(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  skills.forEach((s) => observer.observe(s));
}

// ============================================================
// 9. CHẾ ĐỘ GIAO DIỆN SÁNG / TỐI (DARK MODE)
// ============================================================
function initDarkMode() {
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;

  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("portfolio-theme", next);
  });
}

// ============================================================
// 10. CUỘN TRANG MƯỢT MÀ (SMOOTH SCROLL)
// ============================================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = document.getElementById("navbar")?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    });
  });
}

// ============================================================
// 11. HIỆU ỨNG CHUYỂN ĐỘNG THEO CHUỘT (PARALLAX)
// ============================================================
function initParallax() {
  const shapes = document.querySelectorAll(".hero-shape");
  if (!shapes.length) return;

  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    shapes.forEach((shape, i) => {
      const speed = (i + 1) * 8;
      shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
  });
}

// ============================================================
// KHỞI CHẠY TẤT CẢ CÁC MODULE KHI TRANG TẢI XONG
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  populatePage();
  loadParticles();
  attachAboutMouseListener();
  initCustomCursor();
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initSkillBars();
  initDarkMode();
  initSmoothScroll();
  initParallax();
  initQualificationTabs();
  initProjectCards();
});
