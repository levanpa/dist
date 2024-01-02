import"./style.8dd7db12.js";const l={"01":"\u0103n \u0103m","02":"R Tr","03":"ong \xF4ng","04":"oa oan","05":"at \xE2t","06":"\u0103 \u0103t","07":"\xF4c \u01A1c","08":"9","09":"G Gi",10:"\u01A1 \u01A1i",11:"eo \xEAu",12:"Y",13:"Ng Gh",14:"T Th",15:"oc oe",16:"an \xE2n",17:"",18:"\xEAn \xEAm",19:"ien i\xEAm",20:"en em",21:"uy\xEAn uy\xEAt",22:"ap \xE2p",23:"op \xF4p",24:"H",25:"oi \xF4i",26:"in im",27:"4",28:"e \xEA f",29:"it ip",30:"ac \xE2c",31:"D Z",32:"ang \xE2ng",33:"Ngh",34:"ung \u01B0ng",35:"8",36:"\u0103ng",37:"i\xEAu i\xEAt",38:"anh ach",39:"7",40:"1",41:"Q Qu",42:"\u0103c \u0103p",43:"\u01A1n \u01A1m",44:"i\xEAp i\xEAc",45:"ut up",46:"ai ao",47:"6",48:"iu ia",49:"3",50:"ich ing",51:"et \xEAt",52:"ech \xEAch",53:"N Nh",54:"ua \u01B0a",55:"um \u01B0m",56:"uy u\xEA",57:"\u01B0t \u01B0p",58:"x oanh",59:"\u01B0\u01A1c \u01B0\u01A1p",60:"om \xF4m",61:"u \u01B0",62:"un \u01B0n",63:"\u01A1t \u01A1p",64:"u\xE2n u\xE2ng",65:"i j",66:"am \xE2m",67:"oat o\u0103t",68:"o on",69:"C Ch",70:"o\u0103c oai",71:"uya uynh",72:"u\xF4ng uynh",73:"uc \u01B0c",74:"inh i\xEAng",75:"5",76:"\u0110",77:"L",78:"u\xF4n u\xF4m",79:"oang oach",80:"P Ph",81:"ot \xF4t",82:"au \xE2u",83:"eng \xEAng",84:"ui \u01B0i",85:"K Kh",86:"\u01B0\u01A1t \u01B0\u01A1m",87:"u\xF4c u\xF4t",88:"u\xE2y uyt",89:"2",90:"\u01B0\u01A1u \u01B0\u01A1n",91:"V W",92:"ep \xEAp",93:"\u01B0u u\xE2t",94:"\xF4 \xF4n",95:"u\xF4i \u01B0\u01A1i",96:"M",97:"B",98:"ay \xE2y",99:"a \xE2","00":"S"},o={1:" ",2:" ",3:"\\",4:"\\",5:"/",6:"/",7:".",8:".",9:"?~",0:"?~"};function c(){let e=$(".input-code").val().split(/ |\n/);$(".list-wrapper").html(""),e.forEach((s,n)=>{if(s.length==5){let r=s.substring(0,2),a=s.substring(2,4),i=s.substring(4,5);p(l[r],l[a],o[i],n,s)}else d(s,n)})}function p(t,e,s,n,r){let a=t.split(" "),i=e.split(" "),u=`<div id="word-${n}" class="word">
      <span class="code-of-word">${r}</span>
      <ul class="list">
        <li class="item first is-active">${a[0]}</li>
        ${a[1]?`<li class="item first">${a[1]}</li>`:""}
        </ul>
        <ul class="list">
        <li class="item second is-active">${i[0]}</li>
        ${i[1]?`<li class="item second">${i[1]}</li>`:""}
        ${i[2]?`<li class="item second">${i[2]}</li>`:""}
      </ul>
      <div class="result">
        <span class="result-item first">${a[0]}</span>
        <span class="result-item second">${i[0]}</span>
        <span class="result-item mark">&nbsp;${s}</span>
      </div>
    </div>`;$(".list-wrapper").append(u)}function d(t,e){let s=`<div id="word-${e}" class="word is-error">
      <span class="text">L\u1ED7i</span>
    </div>`;$(".list-wrapper").append(s)}function g(){$(".list-wrapper").on("click",".item",t=>{let e=$(t.target).text(),s=$(t.target).attr("class");s=s.includes("first")?"first":"second",$(t.target).parents(".word").find(`.result > .${s}`).text(e),$(t.target).parent().find(".item").removeClass("is-active"),$(t.target).addClass("is-active")}),$(".list-wrapper").on("click",".word",t=>{$(t.currentTarget).attr("id"),$(".list-wrapper .word").removeClass("is-active"),$(t.currentTarget).addClass("is-active")}),$(".submit-code").on("click",t=>{t.preventDefault(),c()})}$(function(){c(),g()});
