import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var $: any;
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SeoService } from '../../@services/seo.service';

@Component({
  selector: 'app-iqureyforms',
  templateUrl: './iqureyforms.component.html',
  styleUrls: ['./iqureyforms.component.scss']
})
export class IqureyformsComponent implements OnInit {
  isBellRinging = false;
  bellImageUrl = '../../../../../assets/img/chatbot/chatbot/small-bell-1.png';
  ringingBellImageUrl = '../../../../../assets/img/chatbot/chatbot/8294998.png';

  registerform !: FormGroup;
  flag_num = false;
  flag_requirment = false;
  flag_last = false;
  setor_input = false;
  flag_tx = false;
  // flag_last1 = false;
  serve_input = {
    name: "",
    email: "",
    number: "",
    requirment: "",
    sector: ""
  }
  chatBtn = false;

  @ViewChild('Toggle') Toggle !: ElementRef;

  Toggleup = false
  // @HostListener('document:click', ['$event.target'])

  constructor(private formbuilder: FormBuilder, private api: SeoService) { }
  ngOnInit(): void {
    // this.toggle()
    // debugger
    if (!this.Toggle.nativeElement.contains()) {
      this.Toggleup = false;
    }
    (function () {
      // emailjs.init("Cwk_h6ksYxMCDCDy_"); //please encrypted user id for malicious attacks/'/'
    })();

    $(".chat-box").hide();


    this.registerform = this.formbuilder.group({
      name: ['', Validators.required]

    })
  }
  ring(): void {
    this.isBellRinging = !this.isBellRinging;
    // Additional logic if needed
  }
  chatbotfirstmsg() {
    if (document.getElementsByClassName('first').length == 0) {


      let res_elm = document.createElement("div");
      res_elm.innerHTML = "I'd want to know your name.";
      res_elm.setAttribute("class", "first");
      // res_elm.style.cssText = ' display: block;position: relative; margin-bottom: 1em;clear: both; float: left;margin-left: 20px;'
      res_elm.style.cssText = 'width: 60%;word-wrap:break-word;background-color:rgb(222 226 230);padding: 20px 10px;border-radius:10px 10px 10px 0; margin: 10px 0;color:grey ;  font-size: 13px !important;'
      // if(res_elm.)
      // document.getElementById('msg').appendChild(res_elm);
      document.getElementById('msg')?.appendChild(res_elm)

      // console.log(document.getElementById('msg'))
      document.getElementById('msg')?.appendChild(res_elm)

      // console.log(res_elm.innerHTML)
    }
  }

  public submitform(e: Event) {

    // console.log(document.getElementById('msg'))
    // console.log(e)
    $('#msg').animate({
      // const height = 300
      scrollTop: $("footer").offset().top
    }, 600);

    // console.log(this.serve_input.name)
    // console.log(this.registerform.valid)
    if (!this.serve_input.name && this.registerform.valid) {
      // console.log("this is submit")
      this.serve_input.name = this.registerform.value.name;
      let res_elm = document.createElement("div");
      res_elm.innerHTML = this.serve_input.name;
      this.registerform.value.name = null;

      res_elm.setAttribute("class", "left");
      // res_elm.style.cssText = ' display: block;position: relative; margin-bottom: 1em;clear: both; float: right;margin-right: 20px;'
      res_elm.style.cssText = 'width: 60%;word-wrap:break-word;background-color:#12344d;padding: 20px 10px;border-radius:10px 10px 0px 10px;margin: 5px 0 5px auto;color:White; font-size: 13px !important;'
      document.getElementById('msg')?.appendChild(res_elm);
      let res_elm1 = document.createElement("div");
      res_elm1.innerHTML = "Could I have your email address, please?";
      // res_elm1.style.cssText = ' display: block;position: relative; margin-bottom: 1em;clear: both; float: left;margin-left: 20px;'
      // res_elm1.style.cssText = 'width: 60%;word-wrap:break-word;background-color: #b5d7eb;padding: 7px 10px;border-radius:10px 10px 0px 10px;margin: 5px 0 5px auto;'
      res_elm1.style.cssText = 'width: 60%;word-wrap:break-word;background-color:rgb(222 226 230);padding: 20px 10px;border-radius:10px 10px 10px 0; margin: 10px 0;color:grey; font-size: 13px !important;'
      document.getElementById('msg')?.appendChild(res_elm1);

    }

    if (!this.serve_input.email && !this.flag_num) {
      if (this.registerform.value.name) {
        let res_elm1 = document.createElement("div");
        res_elm1.innerHTML = this.registerform.value.name;
        res_elm1.style.cssText = 'width: 60%;word-wrap:break-word;background-color:#12344d;padding: 20px 10px;border-radius:10px 10px 0px 10px;margin: 5px 0 5px auto;color:White; font-size: 13px !important;'
        // res_elm1.style.cssText = ' display: block;position: relative; margin-bottom: 1em;clear: both; float: right;margin-right: 20px;'
        // console.log("this is append")
        // if()
        document.getElementById('msg')?.appendChild(res_elm1);
        // res_elm1.setAttribute("class", "right");
        let flag = this.ValidateEmail(this.registerform.value.name)
        // console.log(this.registerform.value.name)
        this.serve_input.email = this.registerform.value.name;
        // console.log(flag)
        if (flag) {
          let res_elm2 = document.createElement("div");
          res_elm2.innerHTML = "Would you mind sharing your phone number, please?";
          res_elm2.style.cssText = 'width: 60%;word-wrap:break-word;background-color:rgb(222 226 230);padding: 20px 10px;border-radius:10px 10px 10px 0; margin: 10px 0;color:grey; font-size: 13px !important;'
          // res_elm2.style.cssText = ' display: block;position: relative; margin-bottom: 1em;clear: both; float: left;margin-left: 20px;'
          document.getElementById('msg')?.appendChild(res_elm2);
          this.registerform.value.name = null;
          this.flag_num = true
        }
        else if (this.serve_input.email && !flag) {
          // console.log(this.registerform.value.name)
          this.serve_input.email = "";
          let res_elm2 = document.createElement("div");
          res_elm2.innerHTML = "Oops! it's not valid email address";
          // res_elm2.style.cssText = ' display: block;position: relative; margin-bottom: 1em;clear: both; float: left;margin-left: 20px;'
          res_elm2.style.cssText = 'width: 60%;word-wrap:break-word;background-color:rgb(222 226 230);padding: 20px 10px;border-radius:10px 10px 10px 0; margin: 10px 0;color:grey; font-size: 13px !important;'

          document.getElementById('msg')?.appendChild(res_elm2);
          this.registerform.value.name = null;
          // this.flag_num = false
        }
      }
    }

    if (!this.serve_input.number && this.flag_num) {
      // console.log("enter number function")
      if (this.registerform.value.name) {
        let res_elm3 = document.createElement("div");
        res_elm3.innerHTML = this.registerform.value.name;
        // res_elm3.style.cssText = ' display: block;position: relative;background-color: coral;margin-bottom: 1em;clear: both; float: right;margin-right: 20px;'
        res_elm3.style.cssText = 'width: 60%;word-wrap:break-word;background-color:#12344d;padding: 20px 10px;border-radius:10px 10px 0px 10px;margin: 5px 0 5px auto;color:White; font-size: 13px !important;'

        document.getElementById('msg')?.appendChild(res_elm3);
        // console.log(res_elm3)
        let flag1 = this.phonenumber(this.registerform.value.name)
        // console.log(this.registerform.value.name)
        // console.log(flag1)
        this.serve_input.number = this.registerform.value.name;
        // console.log(flag)
        if (flag1 && this.serve_input.number) {
          let res_elm4 = document.createElement("div");
          res_elm4.innerHTML = "Could I ask what industry you're in?";
          // res_elm4.style.cssText = ' display: block;position: relative; margin-bottom: 1em;clear: both; float: left;margin-left: 20px;'
          res_elm4.style.cssText = 'width: 60%;word-wrap:break-word;background-color:rgb(222 226 230);padding: 20px 10px;border-radius:10px 10px 10px 0; margin: 10px 0;color:grey; font-size: 13px !important;'
          document.getElementById('msg')?.appendChild(res_elm4);
          this.registerform.value.name = null;
          this.flag_requirment = true;

        }
        else if (this.serve_input.number && !flag1) {
          // console.log(this.registerform.value.name)
          this.serve_input.number = "";
          let res_elm4 = document.createElement("div");
          res_elm4.innerHTML = "Oops! it's not valid phone number";
          res_elm4.style.cssText = 'width: 60%;word-wrap:break-word;background-color:rgb(222 226 230);padding: 20px 10px;border-radius:10px 10px 10px 0; margin: 10px 0;color:grey; font-size: 13px !important;'

          // res_elm4.style.cssText = ' display: block;position: relative; margin-bottom: 1em;clear: both; float: left;margin-left: 20px;'
          document.getElementById('msg')?.appendChild(res_elm4);
          this.registerform.value.name = null;
        }
      }
    }


    if (!this.serve_input.requirment && this.flag_num && this.flag_requirment) {
      // console.log("enter in requirment")
      if (this.registerform.value.name) {
        let res_elm5 = document.createElement("div");
        res_elm5.innerHTML = this.registerform.value.name;
        res_elm5.style.cssText = 'width: 60%;word-wrap:break-word;background-color:#12344d;padding: 20px 10px;border-radius:10px 10px 0px 10px;margin: 5px 0 5px auto;color:White; font-size: 13px !important;'
        // res_elm5.style.cssText = ' display: block;position: relative; margin-bottom: 1em;clear: both; float: right;margin-right: 20px;'
        document.getElementById('msg')?.appendChild(res_elm5);
        this.serve_input.requirment = this.registerform.value.name;
        this.registerform.value.name = null;
        //  console.log(this.serve_input)
        this.flag_last = true
      }
    }
    if (!this.serve_input.sector && this.flag_num && this.flag_requirment && this.flag_last) {
      // console.log("enter in requirment")
      let res_elm6 = document.createElement("div");
      res_elm6.innerHTML = "What exactly are you seeking?";
      res_elm6.style.cssText = 'width: 60%;word-wrap:break-word;background-color:rgb(222 226 230);padding: 20px 10px;border-radius:10px 10px 10px 0; margin: 10px 0;color:grey; font-size: 13px !important;'
      document.getElementById('msg')?.appendChild(res_elm6);
      // console.log("this is sector tag")
      this.setor_input = true

      this.flag_last = false
    }

    if (!this.serve_input.sector && this.setor_input && this.flag_num && this.flag_requirment && !this.flag_last) {
      if (this.registerform.value.name) {


        let res_elm7 = document.createElement("div");
        this.serve_input.sector = this.registerform.value.name;
        res_elm7.innerHTML = this.registerform.value.name;
        // res_elm5.style.cssText = ''
        res_elm7.style.cssText = 'width: 60%;word-wrap:break-word;background-color:#12344d;padding: 20px 10px;border-radius:10px 10px 0px 10px;margin: 5px 0 5px auto;color:White; font-size: 13px !important;'
        document.getElementById('msg')?.appendChild(res_elm7);
        // this.serve_input.sector = this.registerform.value.name;
        // document.getElementById
        // this.flag_last = true;
        this.flag_tx = true
        //  console.log(this.serve_input)
      }
    }

    if (this.serve_input.sector && this.setor_input && this.flag_num && this.flag_requirment && this.flag_tx) {
      let res_elm6 = document.createElement("div");
      res_elm6.innerHTML = "Our Team Will Contact You Shortly, Many Thanks";
      res_elm6.style.cssText = 'width: 60%;word-wrap:break-word;background-color:rgb(222 226 230);padding: 20px 10px;border-radius:10px 10px 10px 0; margin: 10px 0;color:grey; font-size: 13px !important;'
      document.getElementById('msg')?.appendChild(res_elm6)
      // this.flag_last = true;
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      // console.log(this.serve_input)
      var raw = JSON.stringify({
        "name": this.serve_input.name,
        "email": this.serve_input.email,
        "number": this.serve_input.number,
        "requirement": this.serve_input.requirment,
        "sector": this.serve_input.sector
      });

      // fetch("https://testdata.techupsoftsolution.com:8082/chatbot/create", {
      //   method: 'POST',
      //   headers: myHeaders,
      //   body: raw,
      //   redirect: 'follow'
      // })

      // .then(response => response.text())
      // .then((result) => {
      //   if (JSON.parse(result).success) {


      //     // emailjs.send('service_ln2kn1r', 'template_2s4jd19', this.serve_input)
      //     //   .then(function (response) {

      //     //   }, function (error) {

      //     //   });

      //     this.flag_tx = false
      //   }else{

      //     this.flag_tx = false
      //   }

      // })
      //   .catch(error => console.log('error', error));
      //  emailjs.send('service_n9fxbvb', 'template_2s4jd19', this.serve_input)
      //         .then(function (response) {

      //         }, function (error) {

      //         });

      // this.flag_tx = false
      // this.chatapi.chatpost(this.serve_input).subscribe({
      //   next: (res) => {
      //     console.log(res)


      //     emailjs.send('service_ln2kn1r', 'template_2s4jd19', this.serve_input)
      //       .then(function (response) {

      //       }, function (error) {

      //       });

      //     this.flag_tx = false

      //   },
      //   error: () => {

      //   }
      // })






    }



  }



  ValidateEmail(mail: any) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return (true)
    }
    // alert("You have entered an invalid email address!")
    return (false)
  }

  phonenumber(phone: any) {
    // var phoneno = /^\d{10}$/;
    if (/^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(phone)) {
      return (true)
    }
    // alert("You have entered an invalid email address!")
    return (false)
  }

  toggle() {


    $(document).ready(() => {

      this.chatbotfirstmsg()
      $(".chat-box").slideToggle("slow")


    })

  }
  toggle1() {
    $(document).ready(() => {

      this.chatbotfirstmsg()
      $(".chat-input1").slideToggle("slow")



    })
  }
}
