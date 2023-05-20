(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const to="148",Zn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Jn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pc=0,So=1,mc=2,fl=1,pl=2,Vi=3,Vn=0,Ne=1,eo=2,as=3,Mn=0,xi=1,Eo=2,Ao=3,To=4,gc=5,pi=100,vc=101,xc=102,Co=103,Lo=104,_c=200,yc=201,bc=202,wc=203,ml=204,gl=205,Mc=206,Sc=207,Ec=208,Ac=209,Tc=210,Cc=0,Lc=1,Pc=2,Gr=3,Rc=4,Dc=5,Ic=6,zc=7,vl=0,Nc=1,Fc=2,pn=0,Oc=1,Bc=2,Uc=3,kc=4,Vc=5,xl=300,bi=301,wi=302,Hr=303,Wr=304,ks=306,qr=1e3,Ve=1001,Xr=1002,ye=1003,Po=1004,Js=1005,De=1006,Gc=1007,$i=1008,Gn=1009,Hc=1010,Wc=1011,_l=1012,qc=1013,On=1014,Bn=1015,Yi=1016,Xc=1017,$c=1018,_i=1020,Yc=1021,jc=1022,Ge=1023,Zc=1024,Jc=1025,Un=1026,Mi=1027,Kc=1028,Qc=1029,th=1030,eh=1031,nh=1033,Ks=33776,Qs=33777,tr=33778,er=33779,Ro=35840,Do=35841,Io=35842,zo=35843,ih=36196,No=37492,Fo=37496,Oo=37808,Bo=37809,Uo=37810,ko=37811,Vo=37812,Go=37813,Ho=37814,Wo=37815,qo=37816,Xo=37817,$o=37818,Yo=37819,jo=37820,Zo=37821,Jo=36492,Hn=3e3,Zt=3001,sh=3200,rh=3201,yl=0,oh=1,$e="srgb",ji="srgb-linear",nr=7680,ah=519,Ko=35044,Qo="300 es",$r=1035;class jn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ir=Math.PI/180,ta=180/Math.PI;function Ai(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pe[a&255]+pe[a>>8&255]+pe[a>>16&255]+pe[a>>24&255]+"-"+pe[t&255]+pe[t>>8&255]+"-"+pe[t>>16&15|64]+pe[t>>24&255]+"-"+pe[e&63|128]+pe[e>>8&255]+"-"+pe[e>>16&255]+pe[e>>24&255]+pe[n&255]+pe[n>>8&255]+pe[n>>16&255]+pe[n>>24&255]).toLowerCase()}function me(a,t,e){return Math.max(t,Math.min(e,a))}function lh(a,t){return(a%t+t)%t}function sr(a,t,e){return(1-e)*a+e*t}function ea(a){return(a&a-1)===0&&a!==0}function Yr(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function ls(a,t){switch(t.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Ee(a,t){switch(t.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ce{constructor(){Ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],m=i[0],f=i[3],v=i[6],x=i[1],_=i[4],w=i[7],y=i[2],A=i[5],D=i[8];return s[0]=r*m+o*x+l*y,s[3]=r*f+o*_+l*A,s[6]=r*v+o*w+l*D,s[1]=c*m+h*x+d*y,s[4]=c*f+h*_+d*A,s[7]=c*v+h*w+d*D,s[2]=u*m+p*x+g*y,s[5]=u*f+p*_+g*A,s[8]=u*v+p*w+g*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*o*c-n*s*h+n*o*l+i*s*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*r-o*c,u=o*l-h*s,p=c*s-r*l,g=e*d+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return t[0]=d*m,t[1]=(i*c-h*n)*m,t[2]=(o*n-i*r)*m,t[3]=u*m,t[4]=(h*e-i*l)*m,t[5]=(i*s-o*e)*m,t[6]=p*m,t[7]=(n*l-c*e)*m,t[8]=(r*e-n*s)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*o)+r+t,-i*c,i*l,-i*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(rr.makeScale(t,e)),this}rotate(t){return this.premultiply(rr.makeRotation(-t)),this}translate(t,e){return this.premultiply(rr.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const rr=new Ce;function bl(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function Zi(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function kn(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Fs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const or={[$e]:{[ji]:kn},[ji]:{[$e]:Fs}},xe={legacyMode:!0,get workingColorSpace(){return ji},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,t,e){if(this.legacyMode||t===e||!t||!e)return a;if(or[t]&&or[t][e]!==void 0){const n=or[t][e];return a.r=n(a.r),a.g=n(a.g),a.b=n(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,t){return this.convert(a,this.workingColorSpace,t)},toWorkingColorSpace:function(a,t){return this.convert(a,t,this.workingColorSpace)}},wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},re={r:0,g:0,b:0},Oe={h:0,s:0,l:0},cs={h:0,s:0,l:0};function ar(a,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?a+(t-a)*6*e:e<1/2?t:e<2/3?a+(t-a)*6*(2/3-e):a}function hs(a,t){return t.r=a.r,t.g=a.g,t.b=a.b,t}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=xe.workingColorSpace){if(t=lh(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=ar(r,s,t+1/3),this.g=ar(r,s,t),this.b=ar(r,s,t-1/3)}return xe.toWorkingColorSpace(this,i),this}setStyle(t,e=$e){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,xe.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,xe.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,xe.toWorkingColorSpace(this,e),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,xe.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=$e){const n=wl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=kn(t.r),this.g=kn(t.g),this.b=kn(t.b),this}copyLinearToSRGB(t){return this.r=Fs(t.r),this.g=Fs(t.g),this.b=Fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return xe.fromWorkingColorSpace(hs(this,re),t),me(re.r*255,0,255)<<16^me(re.g*255,0,255)<<8^me(re.b*255,0,255)<<0}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.fromWorkingColorSpace(hs(this,re),e);const n=re.r,i=re.g,s=re.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=xe.workingColorSpace){return xe.fromWorkingColorSpace(hs(this,re),e),t.r=re.r,t.g=re.g,t.b=re.b,t}getStyle(t=$e){return xe.fromWorkingColorSpace(hs(this,re),t),t!==$e?`color(${t} ${re.r} ${re.g} ${re.b})`:`rgb(${re.r*255|0},${re.g*255|0},${re.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(Oe),Oe.h+=t,Oe.s+=e,Oe.l+=n,this.setHSL(Oe.h,Oe.s,Oe.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Oe),t.getHSL(cs);const n=sr(Oe.h,cs.h,e),i=sr(Oe.s,cs.s,e),s=sr(Oe.l,cs.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Yt.NAMES=wl;let Kn;class Ml{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Kn===void 0&&(Kn=Zi("canvas")),Kn.width=t.width,Kn.height=t.height;const n=Kn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Kn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=kn(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(kn(e[n]/255)*255):e[n]=kn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Sl{constructor(t=null){this.isSource=!0,this.uuid=Ai(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(lr(i[r].image)):s.push(lr(i[r]))}else s=lr(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function lr(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Ml.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ch=0;class we extends jn{constructor(t=we.DEFAULT_IMAGE,e=we.DEFAULT_MAPPING,n=Ve,i=Ve,s=De,r=$i,o=Ge,l=Gn,c=we.DEFAULT_ANISOTROPY,h=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ch++}),this.uuid=Ai(),this.name="",this.source=new Sl(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qr:t.x=t.x-Math.floor(t.x);break;case Ve:t.x=t.x<0?0:1;break;case Xr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qr:t.y=t.y-Math.floor(t.y);break;case Ve:t.y=t.y<0?0:1;break;case Xr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}we.DEFAULT_IMAGE=null;we.DEFAULT_MAPPING=xl;we.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,i=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],m=l[2],f=l[6],v=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-m)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+m)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,w=(p+1)/2,y=(v+1)/2,A=(h+u)/4,D=(d+m)/4,b=(g+f)/4;return _>w&&_>y?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=A/n,s=D/n):w>y?w<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(w),n=A/i,s=b/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=D/s,i=b/s),this.set(n,i,s,e),this}let x=Math.sqrt((f-g)*(f-g)+(d-m)*(d-m)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(f-g)/x,this.y=(d-m)/x,this.z=(u-h)/x,this.w=Math.acos((c+p+v-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wn extends jn{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new we(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:De,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Sl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class El extends we{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ye,this.minFilter=ye,this.wrapR=Ve,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hh extends we{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ye,this.minFilter=ye,this.wrapR=Ve,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let qn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=s[r+0],p=s[r+1],g=s[r+2],m=s[r+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=m;return}if(d!==m||l!==u||c!==p||h!==g){let f=1-o;const v=l*u+c*p+h*g+d*m,x=v>=0?1:-1,_=1-v*v;if(_>Number.EPSILON){const y=Math.sqrt(_),A=Math.atan2(y,v*x);f=Math.sin(f*A)/y,o=Math.sin(o*A)/y}const w=o*x;if(l=l*f+u*w,c=c*f+p*w,h=h*f+g*w,d=d*f+m*w,f===1-o){const y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,r){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[r],u=s[r+1],p=s[r+2],g=s[r+3];return t[e]=o*g+h*d+l*p-c*u,t[e+1]=l*g+h*u+c*d-o*p,t[e+2]=c*g+h*p+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),u=l(n/2),p=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(r-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(s-c)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(r-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,r=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*o+i*c-s*l,this._y=i*h+r*l+s*o-n*c,this._z=s*h+r*c+n*l-i*o,this._w=r*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=r*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(na.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(na.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=l*e+r*i-o*n,h=l*n+o*e-s*i,d=l*i+s*n-r*e,u=-s*e-r*n-o*i;return this.x=c*l+u*-s+h*-o-d*-r,this.y=h*l+u*-r+d*-s-c*-o,this.z=d*l+u*-o+c*-r-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,r=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return cr.copy(this).projectOnVector(t),this.sub(cr)}reflect(t){return this.sub(cr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cr=new O,na=new qn;class es{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let l=0,c=t.length;l<c;l+=3){const h=t[l],d=t[l+1],u=t[l+2];h<e&&(e=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>r&&(r=d),u>o&&(o=u)}return this.min.set(e,n,i),this.max.set(s,r,o),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let l=0,c=t.count;l<c;l++){const h=t.getX(l),d=t.getY(l),u=t.getZ(l);h<e&&(e=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>r&&(r=d),u>o&&(o=u)}return this.min.set(e,n,i),this.max.set(s,r,o),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let r=0,o=s.count;r<o;r++)Ln.fromBufferAttribute(s,r).applyMatrix4(t.matrixWorld),this.expandByPoint(Ln)}else n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox),hr.applyMatrix4(t.matrixWorld),this.union(hr);const i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Pi),us.subVectors(this.max,Pi),Qn.subVectors(t.a,Pi),ti.subVectors(t.b,Pi),ei.subVectors(t.c,Pi),xn.subVectors(ti,Qn),_n.subVectors(ei,ti),Pn.subVectors(Qn,ei);let e=[0,-xn.z,xn.y,0,-_n.z,_n.y,0,-Pn.z,Pn.y,xn.z,0,-xn.x,_n.z,0,-_n.x,Pn.z,0,-Pn.x,-xn.y,xn.x,0,-_n.y,_n.x,0,-Pn.y,Pn.x,0];return!ur(e,Qn,ti,ei,us)||(e=[1,0,0,0,1,0,0,0,1],!ur(e,Qn,ti,ei,us))?!1:(ds.crossVectors(xn,_n),e=[ds.x,ds.y,ds.z],ur(e,Qn,ti,ei,us))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Ln.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const nn=[new O,new O,new O,new O,new O,new O,new O,new O],Ln=new O,hr=new es,Qn=new O,ti=new O,ei=new O,xn=new O,_n=new O,Pn=new O,Pi=new O,us=new O,ds=new O,Rn=new O;function ur(a,t,e,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){Rn.fromArray(a,s);const o=i.x*Math.abs(Rn.x)+i.y*Math.abs(Rn.y)+i.z*Math.abs(Rn.z),l=t.dot(Rn),c=e.dot(Rn),h=n.dot(Rn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const uh=new es,Ri=new O,dr=new O;let no=class{constructor(t=new O,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):uh.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ri.subVectors(t,this.center);const e=Ri.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ri,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ri.copy(t.center).add(dr)),this.expandByPoint(Ri.copy(t.center).sub(dr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const sn=new O,fr=new O,fs=new O,yn=new O,pr=new O,ps=new O,mr=new O;let dh=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(sn.copy(this.direction).multiplyScalar(e).add(this.origin),sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){fr.copy(t).add(e).multiplyScalar(.5),fs.copy(e).sub(t).normalize(),yn.copy(this.origin).sub(fr);const s=t.distanceTo(e)*.5,r=-this.direction.dot(fs),o=yn.dot(this.direction),l=-yn.dot(fs),c=yn.lengthSq(),h=Math.abs(1-r*r);let d,u,p,g;if(h>0)if(d=r*l-o,u=r*o-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const m=1/h;d*=m,u*=m,p=d*(d+r*u+2*o)+u*(r*d+u+2*l)+c}else u=s,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-r*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(r*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=r>0?-s:s,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(fs).multiplyScalar(u).add(fr),p}intersectSphere(t,e){sn.subVectors(t.center,this.origin);const n=sn.dot(this.direction),i=sn.dot(sn)-n*n,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,l=n+r;return o<0&&l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,sn)!==null}intersectTriangle(t,e,n,i,s){pr.subVectors(e,t),ps.subVectors(n,t),mr.crossVectors(pr,ps);let r=this.direction.dot(mr),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;yn.subVectors(this.origin,t);const l=o*this.direction.dot(ps.crossVectors(yn,ps));if(l<0)return null;const c=o*this.direction.dot(pr.cross(yn));if(c<0||l+c>r)return null;const h=-o*yn.dot(mr);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class se{constructor(){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,r,o,l,c,h,d,u,p,g,m,f){const v=this.elements;return v[0]=t,v[4]=e,v[8]=n,v[12]=i,v[1]=s,v[5]=r,v[9]=o,v[13]=l,v[2]=c,v[6]=h,v[10]=d,v[14]=u,v[3]=p,v[7]=g,v[11]=m,v[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ni.setFromMatrixColumn(t,0).length(),s=1/ni.setFromMatrixColumn(t,1).length(),r=1/ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=r*h,p=r*d,g=o*h,m=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=u-m*c,e[9]=-o*l,e[2]=m-u*c,e[6]=g+p*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*h,p=l*d,g=c*h,m=c*d;e[0]=u+m*o,e[4]=g*o-p,e[8]=r*c,e[1]=r*d,e[5]=r*h,e[9]=-o,e[2]=p*o-g,e[6]=m+u*o,e[10]=r*l}else if(t.order==="ZXY"){const u=l*h,p=l*d,g=c*h,m=c*d;e[0]=u-m*o,e[4]=-r*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=r*h,e[9]=m-u*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const u=r*h,p=r*d,g=o*h,m=o*d;e[0]=l*h,e[4]=g*c-p,e[8]=u*c+m,e[1]=l*d,e[5]=m*c+u,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,p=r*c,g=o*l,m=o*c;e[0]=l*h,e[4]=m-u*d,e[8]=g*d+p,e[1]=d,e[5]=r*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*d+g,e[10]=u-m*d}else if(t.order==="XZY"){const u=r*l,p=r*c,g=o*l,m=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+m,e[5]=r*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*h,e[10]=m*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fh,t,ph)}lookAt(t,e,n){const i=this.elements;return Ae.subVectors(t,e),Ae.lengthSq()===0&&(Ae.z=1),Ae.normalize(),bn.crossVectors(n,Ae),bn.lengthSq()===0&&(Math.abs(n.z)===1?Ae.x+=1e-4:Ae.z+=1e-4,Ae.normalize(),bn.crossVectors(n,Ae)),bn.normalize(),ms.crossVectors(Ae,bn),i[0]=bn.x,i[4]=ms.x,i[8]=Ae.x,i[1]=bn.y,i[5]=ms.y,i[9]=Ae.y,i[2]=bn.z,i[6]=ms.z,i[10]=Ae.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],m=n[6],f=n[10],v=n[14],x=n[3],_=n[7],w=n[11],y=n[15],A=i[0],D=i[4],b=i[8],L=i[12],I=i[1],U=i[5],J=i[9],C=i[13],P=i[2],z=i[6],N=i[10],Z=i[14],G=i[3],X=i[7],et=i[11],H=i[15];return s[0]=r*A+o*I+l*P+c*G,s[4]=r*D+o*U+l*z+c*X,s[8]=r*b+o*J+l*N+c*et,s[12]=r*L+o*C+l*Z+c*H,s[1]=h*A+d*I+u*P+p*G,s[5]=h*D+d*U+u*z+p*X,s[9]=h*b+d*J+u*N+p*et,s[13]=h*L+d*C+u*Z+p*H,s[2]=g*A+m*I+f*P+v*G,s[6]=g*D+m*U+f*z+v*X,s[10]=g*b+m*J+f*N+v*et,s[14]=g*L+m*C+f*Z+v*H,s[3]=x*A+_*I+w*P+y*G,s[7]=x*D+_*U+w*z+y*X,s[11]=x*b+_*J+w*N+y*et,s[15]=x*L+_*C+w*Z+y*H,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],m=t[7],f=t[11],v=t[15];return g*(+s*l*d-i*c*d-s*o*u+n*c*u+i*o*p-n*l*p)+m*(+e*l*p-e*c*u+s*r*u-i*r*p+i*c*h-s*l*h)+f*(+e*c*d-e*o*p-s*r*d+n*r*p+s*o*h-n*c*h)+v*(-i*o*h-e*l*d+e*o*u+i*r*d-n*r*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],m=t[13],f=t[14],v=t[15],x=d*f*c-m*u*c+m*l*p-o*f*p-d*l*v+o*u*v,_=g*u*c-h*f*c-g*l*p+r*f*p+h*l*v-r*u*v,w=h*m*c-g*d*c+g*o*p-r*m*p-h*o*v+r*d*v,y=g*d*l-h*m*l-g*o*u+r*m*u+h*o*f-r*d*f,A=e*x+n*_+i*w+s*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/A;return t[0]=x*D,t[1]=(m*u*s-d*f*s-m*i*p+n*f*p+d*i*v-n*u*v)*D,t[2]=(o*f*s-m*l*s+m*i*c-n*f*c-o*i*v+n*l*v)*D,t[3]=(d*l*s-o*u*s-d*i*c+n*u*c+o*i*p-n*l*p)*D,t[4]=_*D,t[5]=(h*f*s-g*u*s+g*i*p-e*f*p-h*i*v+e*u*v)*D,t[6]=(g*l*s-r*f*s-g*i*c+e*f*c+r*i*v-e*l*v)*D,t[7]=(r*u*s-h*l*s+h*i*c-e*u*c-r*i*p+e*l*p)*D,t[8]=w*D,t[9]=(g*d*s-h*m*s-g*n*p+e*m*p+h*n*v-e*d*v)*D,t[10]=(r*m*s-g*o*s+g*n*c-e*m*c-r*n*v+e*o*v)*D,t[11]=(h*o*s-r*d*s-h*n*c+e*d*c+r*n*p-e*o*p)*D,t[12]=y*D,t[13]=(h*m*i-g*d*i+g*n*u-e*m*u-h*n*f+e*d*f)*D,t[14]=(g*o*i-r*m*i-g*n*l+e*m*l+r*n*f-e*o*f)*D,t[15]=(r*d*i-h*o*i+h*n*l-e*d*l-r*n*u+e*o*u)*D,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,o=t.y,l=t.z,c=s*r,h=s*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*r,0,c*l-i*o,h*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,r=e._y,o=e._z,l=e._w,c=s+s,h=r+r,d=o+o,u=s*c,p=s*h,g=s*d,m=r*h,f=r*d,v=o*d,x=l*c,_=l*h,w=l*d,y=n.x,A=n.y,D=n.z;return i[0]=(1-(m+v))*y,i[1]=(p+w)*y,i[2]=(g-_)*y,i[3]=0,i[4]=(p-w)*A,i[5]=(1-(u+v))*A,i[6]=(f+x)*A,i[7]=0,i[8]=(g+_)*D,i[9]=(f-x)*D,i[10]=(1-(u+m))*D,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ni.set(i[0],i[1],i[2]).length();const r=ni.set(i[4],i[5],i[6]).length(),o=ni.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Be.copy(this);const c=1/s,h=1/r,d=1/o;return Be.elements[0]*=c,Be.elements[1]*=c,Be.elements[2]*=c,Be.elements[4]*=h,Be.elements[5]*=h,Be.elements[6]*=h,Be.elements[8]*=d,Be.elements[9]*=d,Be.elements[10]*=d,e.setFromRotationMatrix(Be),n.x=s,n.y=r,n.z=o,this}makePerspective(t,e,n,i,s,r){const o=this.elements,l=2*s/(e-t),c=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i),u=-(r+s)/(r-s),p=-2*r*s/(r-s);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,s,r){const o=this.elements,l=1/(e-t),c=1/(n-i),h=1/(r-s),d=(e+t)*l,u=(n+i)*c,p=(r+s)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ni=new O,Be=new se,fh=new O(0,0,0),ph=new O(1,1,1),bn=new O,ms=new O,Ae=new O,ia=new se,sa=new qn;class ns{constructor(t=0,e=0,n=0,i=ns.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],r=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(me(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-me(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ia.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ia,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sa.setFromEuler(this),this.setFromQuaternion(sa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ns.DefaultOrder="XYZ";ns.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Al{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let mh=0;const ra=new O,ii=new qn,rn=new se,gs=new O,Di=new O,gh=new O,vh=new qn,oa=new O(1,0,0),aa=new O(0,1,0),la=new O(0,0,1),xh={type:"added"},ca={type:"removed"};class ge extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DefaultUp.clone();const t=new O,e=new ns,n=new qn,i=new O(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new se},normalMatrix:{value:new Ce}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=ge.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ge.DefaultMatrixWorldAutoUpdate,this.layers=new Al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ii.setFromAxisAngle(t,e),this.quaternion.multiply(ii),this}rotateOnWorldAxis(t,e){return ii.setFromAxisAngle(t,e),this.quaternion.premultiply(ii),this}rotateX(t){return this.rotateOnAxis(oa,t)}rotateY(t){return this.rotateOnAxis(aa,t)}rotateZ(t){return this.rotateOnAxis(la,t)}translateOnAxis(t,e){return ra.copy(t).applyQuaternion(this.quaternion),this.position.add(ra.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oa,t)}translateY(t){return this.translateOnAxis(aa,t)}translateZ(t){return this.translateOnAxis(la,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?gs.copy(t):gs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(Di,gs,this.up):rn.lookAt(gs,Di,this.up),this.quaternion.setFromRotationMatrix(rn),i&&(rn.extractRotation(i.matrixWorld),ii.setFromRotationMatrix(rn),this.quaternion.premultiply(ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(xh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ca)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(ca)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(rn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectsByProperty(t,e);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,t,gh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,vh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),p=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ge.DefaultUp=new O(0,1,0);ge.DefaultMatrixAutoUpdate=!0;ge.DefaultMatrixWorldAutoUpdate=!0;const Ue=new O,on=new O,gr=new O,an=new O,si=new O,ri=new O,ha=new O,vr=new O,xr=new O,_r=new O;class fn{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ue.subVectors(t,e),i.cross(Ue);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ue.subVectors(i,e),on.subVectors(n,e),gr.subVectors(t,e);const r=Ue.dot(Ue),o=Ue.dot(on),l=Ue.dot(gr),c=on.dot(on),h=on.dot(gr),d=r*c-o*o;if(d===0)return s.set(-2,-1,-1);const u=1/d,p=(c*l-o*h)*u,g=(r*h-o*l)*u;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,an),an.x>=0&&an.y>=0&&an.x+an.y<=1}static getUV(t,e,n,i,s,r,o,l){return this.getBarycoord(t,e,n,i,an),l.set(0,0),l.addScaledVector(s,an.x),l.addScaledVector(r,an.y),l.addScaledVector(o,an.z),l}static isFrontFacing(t,e,n,i){return Ue.subVectors(n,e),on.subVectors(t,e),Ue.cross(on).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ue.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Ue.cross(on).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return fn.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let r,o;si.subVectors(i,n),ri.subVectors(s,n),vr.subVectors(t,n);const l=si.dot(vr),c=ri.dot(vr);if(l<=0&&c<=0)return e.copy(n);xr.subVectors(t,i);const h=si.dot(xr),d=ri.dot(xr);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(si,r);_r.subVectors(t,s);const p=si.dot(_r),g=ri.dot(_r);if(g>=0&&p<=g)return e.copy(s);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ri,o);const f=h*g-p*d;if(f<=0&&d-h>=0&&p-g>=0)return ha.subVectors(s,i),o=(d-h)/(d-h+(p-g)),e.copy(i).addScaledVector(ha,o);const v=1/(f+m+u);return r=m*v,o=u*v,e.copy(n).addScaledVector(si,r).addScaledVector(ri,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let _h=0,is=class extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=xi,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ml,this.blendDst=gl,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nr,this.stencilZFail=nr,this.stencilZPass=nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(e){const s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class Tl extends is{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ee=new O,vs=new lt;class Ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ko,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vs.fromBufferAttribute(this,e),vs.applyMatrix3(t),this.setXY(e,vs.x,vs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.applyMatrix3(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.applyMatrix4(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.applyNormalMatrix(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.transformDirection(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ls(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ls(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ls(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ls(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ko&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Cl extends Ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ll extends Ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Fe extends Ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let yh=0;const Re=new se,yr=new ge,oi=new O,Te=new es,Ii=new es,ue=new O;class mn extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bl(t)?Ll:Cl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ce().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Re.makeRotationFromQuaternion(t),this.applyMatrix4(Re),this}rotateX(t){return Re.makeRotationX(t),this.applyMatrix4(Re),this}rotateY(t){return Re.makeRotationY(t),this.applyMatrix4(Re),this}rotateZ(t){return Re.makeRotationZ(t),this.applyMatrix4(Re),this}translate(t,e,n){return Re.makeTranslation(t,e,n),this.applyMatrix4(Re),this}scale(t,e,n){return Re.makeScale(t,e,n),this.applyMatrix4(Re),this}lookAt(t){return yr.lookAt(t),yr.updateMatrix(),this.applyMatrix4(yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oi).negate(),this.translate(oi.x,oi.y,oi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Fe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Te.setFromBufferAttribute(s),this.morphTargetsRelative?(ue.addVectors(this.boundingBox.min,Te.min),this.boundingBox.expandByPoint(ue),ue.addVectors(this.boundingBox.max,Te.max),this.boundingBox.expandByPoint(ue)):(this.boundingBox.expandByPoint(Te.min),this.boundingBox.expandByPoint(Te.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new no);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(Te.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const o=e[s];Ii.setFromBufferAttribute(o),this.morphTargetsRelative?(ue.addVectors(Te.min,Ii.min),Te.expandByPoint(ue),ue.addVectors(Te.max,Ii.max),Te.expandByPoint(ue)):(Te.expandByPoint(Ii.min),Te.expandByPoint(Ii.max))}Te.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)ue.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ue));if(e)for(let s=0,r=e.length;s<r;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ue.fromBufferAttribute(o,c),l&&(oi.fromBufferAttribute(t,c),ue.add(oi)),i=Math.max(i,n.distanceToSquared(ue))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,r=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let I=0;I<o;I++)c[I]=new O,h[I]=new O;const d=new O,u=new O,p=new O,g=new lt,m=new lt,f=new lt,v=new O,x=new O;function _(I,U,J){d.fromArray(i,I*3),u.fromArray(i,U*3),p.fromArray(i,J*3),g.fromArray(r,I*2),m.fromArray(r,U*2),f.fromArray(r,J*2),u.sub(d),p.sub(d),m.sub(g),f.sub(g);const C=1/(m.x*f.y-f.x*m.y);isFinite(C)&&(v.copy(u).multiplyScalar(f.y).addScaledVector(p,-m.y).multiplyScalar(C),x.copy(p).multiplyScalar(m.x).addScaledVector(u,-f.x).multiplyScalar(C),c[I].add(v),c[U].add(v),c[J].add(v),h[I].add(x),h[U].add(x),h[J].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let I=0,U=w.length;I<U;++I){const J=w[I],C=J.start,P=J.count;for(let z=C,N=C+P;z<N;z+=3)_(n[z+0],n[z+1],n[z+2])}const y=new O,A=new O,D=new O,b=new O;function L(I){D.fromArray(s,I*3),b.copy(D);const U=c[I];y.copy(U),y.sub(D.multiplyScalar(D.dot(U))).normalize(),A.crossVectors(b,U);const C=A.dot(h[I])<0?-1:1;l[I*4]=y.x,l[I*4+1]=y.y,l[I*4+2]=y.z,l[I*4+3]=C}for(let I=0,U=w.length;I<U;++I){const J=w[I],C=J.start,P=J.count;for(let z=C,N=C+P;z<N;z+=3)L(n[z+0]),L(n[z+1]),L(n[z+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new O,s=new O,r=new O,o=new O,l=new O,c=new O,h=new O,d=new O;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),m=t.getX(u+1),f=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,f),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ue.fromBufferAttribute(t,e),ue.normalize(),t.setXYZ(e,ue.x,ue.y,ue.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let m=0,f=l.length;m<f;m++){o.isInterleavedBufferAttribute?p=l[m]*o.data.stride+o.offset:p=l[m]*h;for(let v=0;v<h;v++)u[g++]=c[p++]}return new Ze(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new mn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ua=new se,ai=new dh,br=new no,zi=new O,Ni=new O,Fi=new O,wr=new O,xs=new O,_s=new lt,ys=new lt,bs=new lt,Mr=new O,ws=new O;class ze extends ge{constructor(t=new mn,e=new Tl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){xs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(wr.fromBufferAttribute(d,t),r?xs.addScaledVector(wr,h):xs.addScaledVector(wr.sub(e),h))}e.add(xs)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(s),t.ray.intersectsSphere(br)===!1)||(ua.copy(s).invert(),ai.copy(t.ray).applyMatrix4(ua),n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1))return;let r;const o=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,d=n.groups,u=n.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,g=d.length;p<g;p++){const m=d[p],f=i[m.materialIndex],v=Math.max(m.start,u.start),x=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let _=v,w=x;_<w;_+=3){const y=o.getX(_),A=o.getX(_+1),D=o.getX(_+2);r=Ms(this,f,t,ai,c,h,y,A,D),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const p=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let m=p,f=g;m<f;m+=3){const v=o.getX(m),x=o.getX(m+1),_=o.getX(m+2);r=Ms(this,i,t,ai,c,h,v,x,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,g=d.length;p<g;p++){const m=d[p],f=i[m.materialIndex],v=Math.max(m.start,u.start),x=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let _=v,w=x;_<w;_+=3){const y=_,A=_+1,D=_+2;r=Ms(this,f,t,ai,c,h,y,A,D),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const p=Math.max(0,u.start),g=Math.min(l.count,u.start+u.count);for(let m=p,f=g;m<f;m+=3){const v=m,x=m+1,_=m+2;r=Ms(this,i,t,ai,c,h,v,x,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function bh(a,t,e,n,i,s,r,o){let l;if(t.side===Ne?l=n.intersectTriangle(r,s,i,!0,o):l=n.intersectTriangle(i,s,r,t.side===Vn,o),l===null)return null;ws.copy(o),ws.applyMatrix4(a.matrixWorld);const c=e.ray.origin.distanceTo(ws);return c<e.near||c>e.far?null:{distance:c,point:ws.clone(),object:a}}function Ms(a,t,e,n,i,s,r,o,l){a.getVertexPosition(r,zi),a.getVertexPosition(o,Ni),a.getVertexPosition(l,Fi);const c=bh(a,t,e,n,zi,Ni,Fi,Mr);if(c){i&&(_s.fromBufferAttribute(i,r),ys.fromBufferAttribute(i,o),bs.fromBufferAttribute(i,l),c.uv=fn.getUV(Mr,zi,Ni,Fi,_s,ys,bs,new lt)),s&&(_s.fromBufferAttribute(s,r),ys.fromBufferAttribute(s,o),bs.fromBufferAttribute(s,l),c.uv2=fn.getUV(Mr,zi,Ni,Fi,_s,ys,bs,new lt));const h={a:r,b:o,c:l,normal:new O,materialIndex:0};fn.getNormal(zi,Ni,Fi,h.normal),c.face=h}return c}class Ti extends mn{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,r,s,0),g("z","y","x",1,-1,n,e,-t,r,s,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(h,3)),this.setAttribute("uv",new Fe(d,2));function g(m,f,v,x,_,w,y,A,D,b,L){const I=w/D,U=y/b,J=w/2,C=y/2,P=A/2,z=D+1,N=b+1;let Z=0,G=0;const X=new O;for(let et=0;et<N;et++){const H=et*U-C;for(let B=0;B<z;B++){const nt=B*I-J;X[m]=nt*x,X[f]=H*_,X[v]=P,c.push(X.x,X.y,X.z),X[m]=0,X[f]=0,X[v]=A>0?1:-1,h.push(X.x,X.y,X.z),d.push(B/D),d.push(1-et/b),Z+=1}}for(let et=0;et<b;et++)for(let H=0;H<D;H++){const B=u+H+z*et,nt=u+H+z*(et+1),st=u+(H+1)+z*(et+1),ct=u+(H+1)+z*et;l.push(B,nt,ct),l.push(nt,st,ct),G+=6}o.addGroup(p,G,L),p+=G,u+=Z}}static fromJSON(t){return new Ti(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Si(a){const t={};for(const e in a){t[e]={};for(const n in a[e]){const i=a[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function _e(a){const t={};for(let e=0;e<a.length;e++){const n=Si(a[e]);for(const i in n)t[i]=n[i]}return t}function wh(a){const t=[];for(let e=0;e<a.length;e++)t.push(a[e].clone());return t}function Pl(a){return a.getRenderTarget()===null&&a.outputEncoding===Zt?$e:ji}const Mh={clone:Si,merge:_e};var Sh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends is{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sh,this.fragmentShader=Eh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Si(t.uniforms),this.uniformsGroups=wh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Rl extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ie extends Rl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ta*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ta*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ir*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const li=-90,ci=1;class Ah extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ie(li,ci,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Ie(li,ci,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const r=new Ie(li,ci,t,e);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);const o=new Ie(li,ci,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Ie(li,ci,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Ie(li,ci,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,o,l,c]=this.children,h=t.getRenderTarget(),d=t.toneMapping,u=t.xr.enabled;t.toneMapping=pn,t.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,r),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=p,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=d,t.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class io extends we{constructor(t,e,n,i,s,r,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:bi,super(t,e,n,i,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Th extends Wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new io(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:De}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ti(5,5,5),s=new Xn({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:Mn});s.uniforms.tEquirect.value=e;const r=new ze(i,s),o=e.minFilter;return e.minFilter===$i&&(e.minFilter=De),new Ah(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}const Sr=new O,Ch=new O,Lh=new Ce;let In=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Sr.subVectors(n,e).cross(Ch.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(Sr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(n).multiplyScalar(s).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Lh.getNormalMatrix(t),i=this.coplanarPoint(Sr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const hi=new no,Ss=new O;class so{constructor(t=new In,e=new In,n=new In,i=new In,s=new In,r=new In){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],h=n[6],d=n[7],u=n[8],p=n[9],g=n[10],m=n[11],f=n[12],v=n[13],x=n[14],_=n[15];return e[0].setComponents(o-i,d-l,m-u,_-f).normalize(),e[1].setComponents(o+i,d+l,m+u,_+f).normalize(),e[2].setComponents(o+s,d+c,m+p,_+v).normalize(),e[3].setComponents(o-s,d-c,m-p,_-v).normalize(),e[4].setComponents(o-r,d-h,m-g,_-x).normalize(),e[5].setComponents(o+r,d+h,m+g,_+x).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(hi)}intersectsSprite(t){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ss.x=i.normal.x>0?t.max.x:t.min.x,Ss.y=i.normal.y>0?t.max.y:t.min.y,Ss.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dl(){let a=null,t=!1,e=null,n=null;function i(s,r){e(s,r),n=a.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=a.requestAnimationFrame(i),t=!0)},stop:function(){a.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){a=s}}}function Ph(a,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,p=a.createBuffer();a.bindBuffer(h,p),a.bufferData(h,d,u),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){const u=h.array,p=h.updateRange;a.bindBuffer(d,c),p.count===-1?a.bufferSubData(d,0,u):(e?a.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):a.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(a.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:r,remove:o,update:l}}class Vs extends mn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,r=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,u=e/l,p=[],g=[],m=[],f=[];for(let v=0;v<h;v++){const x=v*u-r;for(let _=0;_<c;_++){const w=_*d-s;g.push(w,-x,0),m.push(0,0,1),f.push(_/o),f.push(1-v/l)}}for(let v=0;v<l;v++)for(let x=0;x<o;x++){const _=x+c*v,w=x+c*(v+1),y=x+1+c*(v+1),A=x+1+c*v;p.push(_,w,A),p.push(w,y,A)}this.setIndex(p),this.setAttribute("position",new Fe(g,3)),this.setAttribute("normal",new Fe(m,3)),this.setAttribute("uv",new Fe(f,2))}static fromJSON(t){return new Vs(t.width,t.height,t.widthSegments,t.heightSegments)}}var Rh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Dh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ih=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,zh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Oh="vec3 transformed = vec3( position );",Bh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,kh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$h=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,jh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Zh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Jh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,eu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iu="gl_FragColor = linearToOutputTexel( gl_FragColor );",su=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ru=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ou=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,au=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,du=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_u=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yu=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,bu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Su=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Eu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Au=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tu=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Pu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ru=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Du=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Iu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,zu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ou=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ku=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Gu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Hu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Wu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,qu=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ju=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Zu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ju=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Ku=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Qu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,td=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ed=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,nd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,id=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,od=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ad=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ld=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,cd=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hd=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,ud=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,pd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,md=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_d=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,bd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,wd=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Md=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Sd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ed=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Ad=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Td=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Cd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ld=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Nd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Od=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hd=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$d=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Yd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ef=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,of=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,af=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,lf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,zt={alphamap_fragment:Rh,alphamap_pars_fragment:Dh,alphatest_fragment:Ih,alphatest_pars_fragment:zh,aomap_fragment:Nh,aomap_pars_fragment:Fh,begin_vertex:Oh,beginnormal_vertex:Bh,bsdfs:Uh,iridescence_fragment:kh,bumpmap_pars_fragment:Vh,clipping_planes_fragment:Gh,clipping_planes_pars_fragment:Hh,clipping_planes_pars_vertex:Wh,clipping_planes_vertex:qh,color_fragment:Xh,color_pars_fragment:$h,color_pars_vertex:Yh,color_vertex:jh,common:Zh,cube_uv_reflection_fragment:Jh,defaultnormal_vertex:Kh,displacementmap_pars_vertex:Qh,displacementmap_vertex:tu,emissivemap_fragment:eu,emissivemap_pars_fragment:nu,encodings_fragment:iu,encodings_pars_fragment:su,envmap_fragment:ru,envmap_common_pars_fragment:ou,envmap_pars_fragment:au,envmap_pars_vertex:lu,envmap_physical_pars_fragment:yu,envmap_vertex:cu,fog_vertex:hu,fog_pars_vertex:uu,fog_fragment:du,fog_pars_fragment:fu,gradientmap_pars_fragment:pu,lightmap_fragment:mu,lightmap_pars_fragment:gu,lights_lambert_fragment:vu,lights_lambert_pars_fragment:xu,lights_pars_begin:_u,lights_toon_fragment:bu,lights_toon_pars_fragment:wu,lights_phong_fragment:Mu,lights_phong_pars_fragment:Su,lights_physical_fragment:Eu,lights_physical_pars_fragment:Au,lights_fragment_begin:Tu,lights_fragment_maps:Cu,lights_fragment_end:Lu,logdepthbuf_fragment:Pu,logdepthbuf_pars_fragment:Ru,logdepthbuf_pars_vertex:Du,logdepthbuf_vertex:Iu,map_fragment:zu,map_pars_fragment:Nu,map_particle_fragment:Fu,map_particle_pars_fragment:Ou,metalnessmap_fragment:Bu,metalnessmap_pars_fragment:Uu,morphcolor_vertex:ku,morphnormal_vertex:Vu,morphtarget_pars_vertex:Gu,morphtarget_vertex:Hu,normal_fragment_begin:Wu,normal_fragment_maps:qu,normal_pars_fragment:Xu,normal_pars_vertex:$u,normal_vertex:Yu,normalmap_pars_fragment:ju,clearcoat_normal_fragment_begin:Zu,clearcoat_normal_fragment_maps:Ju,clearcoat_pars_fragment:Ku,iridescence_pars_fragment:Qu,output_fragment:td,packing:ed,premultiplied_alpha_fragment:nd,project_vertex:id,dithering_fragment:sd,dithering_pars_fragment:rd,roughnessmap_fragment:od,roughnessmap_pars_fragment:ad,shadowmap_pars_fragment:ld,shadowmap_pars_vertex:cd,shadowmap_vertex:hd,shadowmask_pars_fragment:ud,skinbase_vertex:dd,skinning_pars_vertex:fd,skinning_vertex:pd,skinnormal_vertex:md,specularmap_fragment:gd,specularmap_pars_fragment:vd,tonemapping_fragment:xd,tonemapping_pars_fragment:_d,transmission_fragment:yd,transmission_pars_fragment:bd,uv_pars_fragment:wd,uv_pars_vertex:Md,uv_vertex:Sd,uv2_pars_fragment:Ed,uv2_pars_vertex:Ad,uv2_vertex:Td,worldpos_vertex:Cd,background_vert:Ld,background_frag:Pd,backgroundCube_vert:Rd,backgroundCube_frag:Dd,cube_vert:Id,cube_frag:zd,depth_vert:Nd,depth_frag:Fd,distanceRGBA_vert:Od,distanceRGBA_frag:Bd,equirect_vert:Ud,equirect_frag:kd,linedashed_vert:Vd,linedashed_frag:Gd,meshbasic_vert:Hd,meshbasic_frag:Wd,meshlambert_vert:qd,meshlambert_frag:Xd,meshmatcap_vert:$d,meshmatcap_frag:Yd,meshnormal_vert:jd,meshnormal_frag:Zd,meshphong_vert:Jd,meshphong_frag:Kd,meshphysical_vert:Qd,meshphysical_frag:tf,meshtoon_vert:ef,meshtoon_frag:nf,points_vert:sf,points_frag:rf,shadow_vert:of,shadow_frag:af,sprite_vert:lf,sprite_frag:cf},ut={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ce},uv2Transform:{value:new Ce},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ce}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ce}}},Ye={basic:{uniforms:_e([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:_e([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Yt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:_e([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:_e([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:_e([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Yt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:_e([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:_e([ut.points,ut.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:_e([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:_e([ut.common,ut.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:_e([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:_e([ut.sprite,ut.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:_e([ut.common,ut.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:_e([ut.lights,ut.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Ye.physical={uniforms:_e([Ye.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new lt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Es={r:0,b:0,g:0};function hf(a,t,e,n,i,s,r){const o=new Yt(0);let l=s===!0?0:1,c,h,d=null,u=0,p=null;function g(f,v){let x=!1,_=v.isScene===!0?v.background:null;_&&_.isTexture&&(_=(v.backgroundBlurriness>0?e:t).get(_));const w=a.xr,y=w.getSession&&w.getSession();y&&y.environmentBlendMode==="additive"&&(_=null),_===null?m(o,l):_&&_.isColor&&(m(_,1),x=!0),(a.autoClear||x)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),_&&(_.isCubeTexture||_.mapping===ks)?(h===void 0&&(h=new ze(new Ti(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Si(Ye.backgroundCube.uniforms),vertexShader:Ye.backgroundCube.vertexShader,fragmentShader:Ye.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,D,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=_.encoding!==Zt,(d!==_||u!==_.version||p!==a.toneMapping)&&(h.material.needsUpdate=!0,d=_,u=_.version,p=a.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ze(new Vs(2,2),new Xn({name:"BackgroundMaterial",uniforms:Si(Ye.background.uniforms),vertexShader:Ye.background.vertexShader,fragmentShader:Ye.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=_.encoding!==Zt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||p!==a.toneMapping)&&(c.material.needsUpdate=!0,d=_,u=_.version,p=a.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function m(f,v){f.getRGB(Es,Pl(a)),n.buffers.color.setClear(Es.r,Es.g,Es.b,v,r)}return{getClearColor:function(){return o},setClearColor:function(f,v=1){o.set(f),l=v,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,m(o,l)},render:g}}function uf(a,t,e,n){const i=a.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,o={},l=f(null);let c=l,h=!1;function d(P,z,N,Z,G){let X=!1;if(r){const et=m(Z,N,z);c!==et&&(c=et,p(c.object)),X=v(P,Z,N,G),X&&x(P,Z,N,G)}else{const et=z.wireframe===!0;(c.geometry!==Z.id||c.program!==N.id||c.wireframe!==et)&&(c.geometry=Z.id,c.program=N.id,c.wireframe=et,X=!0)}G!==null&&e.update(G,34963),(X||h)&&(h=!1,b(P,z,N,Z),G!==null&&a.bindBuffer(34963,e.get(G).buffer))}function u(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function p(P){return n.isWebGL2?a.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?a.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function m(P,z,N){const Z=N.wireframe===!0;let G=o[P.id];G===void 0&&(G={},o[P.id]=G);let X=G[z.id];X===void 0&&(X={},G[z.id]=X);let et=X[Z];return et===void 0&&(et=f(u()),X[Z]=et),et}function f(P){const z=[],N=[],Z=[];for(let G=0;G<i;G++)z[G]=0,N[G]=0,Z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:N,attributeDivisors:Z,object:P,attributes:{},index:null}}function v(P,z,N,Z){const G=c.attributes,X=z.attributes;let et=0;const H=N.getAttributes();for(const B in H)if(H[B].location>=0){const st=G[B];let ct=X[B];if(ct===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(ct=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(ct=P.instanceColor)),st===void 0||st.attribute!==ct||ct&&st.data!==ct.data)return!0;et++}return c.attributesNum!==et||c.index!==Z}function x(P,z,N,Z){const G={},X=z.attributes;let et=0;const H=N.getAttributes();for(const B in H)if(H[B].location>=0){let st=X[B];st===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(st=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(st=P.instanceColor));const ct={};ct.attribute=st,st&&st.data&&(ct.data=st.data),G[B]=ct,et++}c.attributes=G,c.attributesNum=et,c.index=Z}function _(){const P=c.newAttributes;for(let z=0,N=P.length;z<N;z++)P[z]=0}function w(P){y(P,0)}function y(P,z){const N=c.newAttributes,Z=c.enabledAttributes,G=c.attributeDivisors;N[P]=1,Z[P]===0&&(a.enableVertexAttribArray(P),Z[P]=1),G[P]!==z&&((n.isWebGL2?a:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,z),G[P]=z)}function A(){const P=c.newAttributes,z=c.enabledAttributes;for(let N=0,Z=z.length;N<Z;N++)z[N]!==P[N]&&(a.disableVertexAttribArray(N),z[N]=0)}function D(P,z,N,Z,G,X){n.isWebGL2===!0&&(N===5124||N===5125)?a.vertexAttribIPointer(P,z,N,G,X):a.vertexAttribPointer(P,z,N,Z,G,X)}function b(P,z,N,Z){if(n.isWebGL2===!1&&(P.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const G=Z.attributes,X=N.getAttributes(),et=z.defaultAttributeValues;for(const H in X){const B=X[H];if(B.location>=0){let nt=G[H];if(nt===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(nt=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(nt=P.instanceColor)),nt!==void 0){const st=nt.normalized,ct=nt.itemSize,$=e.get(nt);if($===void 0)continue;const Pt=$.buffer,yt=$.type,Ct=$.bytesPerElement;if(nt.isInterleavedBufferAttribute){const dt=nt.data,It=dt.stride,tt=nt.offset;if(dt.isInstancedInterleavedBuffer){for(let Q=0;Q<B.locationSize;Q++)y(B.location+Q,dt.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Q=0;Q<B.locationSize;Q++)w(B.location+Q);a.bindBuffer(34962,Pt);for(let Q=0;Q<B.locationSize;Q++)D(B.location+Q,ct/B.locationSize,yt,st,It*Ct,(tt+ct/B.locationSize*Q)*Ct)}else{if(nt.isInstancedBufferAttribute){for(let dt=0;dt<B.locationSize;dt++)y(B.location+dt,nt.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let dt=0;dt<B.locationSize;dt++)w(B.location+dt);a.bindBuffer(34962,Pt);for(let dt=0;dt<B.locationSize;dt++)D(B.location+dt,ct/B.locationSize,yt,st,ct*Ct,ct/B.locationSize*dt*Ct)}}else if(et!==void 0){const st=et[H];if(st!==void 0)switch(st.length){case 2:a.vertexAttrib2fv(B.location,st);break;case 3:a.vertexAttrib3fv(B.location,st);break;case 4:a.vertexAttrib4fv(B.location,st);break;default:a.vertexAttrib1fv(B.location,st)}}}}A()}function L(){J();for(const P in o){const z=o[P];for(const N in z){const Z=z[N];for(const G in Z)g(Z[G].object),delete Z[G];delete z[N]}delete o[P]}}function I(P){if(o[P.id]===void 0)return;const z=o[P.id];for(const N in z){const Z=z[N];for(const G in Z)g(Z[G].object),delete Z[G];delete z[N]}delete o[P.id]}function U(P){for(const z in o){const N=o[z];if(N[P.id]===void 0)continue;const Z=N[P.id];for(const G in Z)g(Z[G].object),delete Z[G];delete N[P.id]}}function J(){C(),h=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:J,resetDefaultState:C,dispose:L,releaseStatesOfGeometry:I,releaseStatesOfProgram:U,initAttributes:_,enableAttribute:w,disableUnusedAttributes:A}}function df(a,t,e,n){const i=n.isWebGL2;let s;function r(c){s=c}function o(c,h){a.drawArrays(s,c,h),e.update(h,s,1)}function l(c,h,d){if(d===0)return;let u,p;if(i)u=a,p="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[p](s,c,h,d),e.update(h,s,d)}this.setMode=r,this.render=o,this.renderInstances=l}function ff(a,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");n=a.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(D){if(D==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&a instanceof WebGL2ComputeRenderingContext;let o=e.precision!==void 0?e.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=r||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=a.getParameter(34930),u=a.getParameter(35660),p=a.getParameter(3379),g=a.getParameter(34076),m=a.getParameter(34921),f=a.getParameter(36347),v=a.getParameter(36348),x=a.getParameter(36349),_=u>0,w=r||t.has("OES_texture_float"),y=_&&w,A=r?a.getParameter(36183):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:f,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:w,floatVertexTextures:y,maxSamples:A}}function pf(a){const t=this;let e=null,n=0,i=!1,s=!1;const r=new In,o=new Ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u,p){const g=d.length!==0||u||n!==0||i;return i=u,e=h(d,p,0),n=d.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(d,u,p){const g=d.clippingPlanes,m=d.clipIntersection,f=d.clipShadows,v=a.get(d);if(!i||g===null||g.length===0||s&&!f)s?h(null):c();else{const x=s?0:n,_=x*4;let w=v.clippingState||null;l.value=w,w=h(g,u,_,p);for(let y=0;y!==_;++y)w[y]=e[y];v.clippingState=w,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){const m=d!==null?d.length:0;let f=null;if(m!==0){if(f=l.value,g!==!0||f===null){const v=p+m*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(f===null||f.length<v)&&(f=new Float32Array(v));for(let _=0,w=p;_!==m;++_,w+=4)r.copy(d[_]).applyMatrix4(x,o),r.normal.toArray(f,w),f[w+3]=r.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,f}}function mf(a){let t=new WeakMap;function e(r,o){return o===Hr?r.mapping=bi:o===Wr&&(r.mapping=wi),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const o=r.mapping;if(o===Hr||o===Wr)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Th(l.height/2);return c.fromEquirectangularTexture(a,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Il extends Rl{constructor(t=-1,e=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,r=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const mi=4,da=[.125,.215,.35,.446,.526,.582],Nn=20,Er=new Il,fa=new Yt;let Ar=null;const zn=(1+Math.sqrt(5))/2,ui=1/zn,pa=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,zn,ui),new O(0,zn,-ui),new O(ui,0,zn),new O(-ui,0,zn),new O(zn,ui,0),new O(-zn,ui,0)];class ma{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ar=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=va(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ar),t.scissorTest=!1,As(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bi||t.mapping===wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ar=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:De,minFilter:De,generateMipmaps:!1,type:Yi,format:Ge,encoding:Hn,depthBuffer:!1},i=ga(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ga(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gf(s)),this._blurMaterial=vf(s,t,e)}return i}_compileMaterial(t){const e=new ze(this._lodPlanes[0],t);this._renderer.compile(e,Er)}_sceneToCubeUV(t,e,n,i){const o=new Ie(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(fa),h.toneMapping=pn,h.autoClear=!1;const p=new Tl({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),g=new ze(new Ti,p);let m=!1;const f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,m=!0):(p.color.copy(fa),m=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(o.up.set(0,l[v],0),o.lookAt(c[v],0,0)):x===1?(o.up.set(0,0,l[v]),o.lookAt(0,c[v],0)):(o.up.set(0,l[v],0),o.lookAt(0,0,c[v]));const _=this._cubeSize;As(i,x*_,v>2?_:0,_,_),h.setRenderTarget(i),m&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===bi||t.mapping===wi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=va());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new ze(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;As(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Er)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=pa[(i-1)%pa.length];this._blur(t,i-1,i,s,r)}e.autoClear=n}_blur(t,e,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ze(this._lodPlanes[i],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Nn-1),m=s/g,f=isFinite(s)?1+Math.floor(h*m):Nn;f>Nn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Nn}`);const v=[];let x=0;for(let D=0;D<Nn;++D){const b=D/m,L=Math.exp(-b*b/2);v.push(L),D===0?x+=L:D<f&&(x+=2*L)}for(let D=0;D<v.length;D++)v[D]=v[D]/x;u.envMap.value=t.texture,u.samples.value=f,u.weights.value=v,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-n;const w=this._sizeLods[i],y=3*w*(i>_-mi?i-_+mi:0),A=4*(this._cubeSize-w);As(e,y,A,3*w,2*w),l.setRenderTarget(e),l.render(d,Er)}}function gf(a){const t=[],e=[],n=[];let i=a;const s=a-mi+1+da.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);let l=1/o;r>a-mi?l=da[r-a+mi-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,m=3,f=2,v=1,x=new Float32Array(m*g*p),_=new Float32Array(f*g*p),w=new Float32Array(v*g*p);for(let A=0;A<p;A++){const D=A%3*2/3-1,b=A>2?0:-1,L=[D,b,0,D+2/3,b,0,D+2/3,b+1,0,D,b,0,D+2/3,b+1,0,D,b+1,0];x.set(L,m*g*A),_.set(u,f*g*A);const I=[A,A,A,A,A,A];w.set(I,v*g*A)}const y=new mn;y.setAttribute("position",new Ze(x,m)),y.setAttribute("uv",new Ze(_,f)),y.setAttribute("faceIndex",new Ze(w,v)),t.push(y),i>mi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ga(a,t,e){const n=new Wn(a,t,e);return n.texture.mapping=ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function As(a,t,e,n,i){a.viewport.set(t,e,n,i),a.scissor.set(t,e,n,i)}function vf(a,t,e){const n=new Float32Array(Nn),i=new O(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function va(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function xa(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function ro(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xf(a){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Hr||l===Wr,h=l===bi||l===wi;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=t.get(o);return e===null&&(e=new ma(a)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),t.set(o,d),d.texture}else{if(t.has(o))return t.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new ma(a));const u=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function _f(a){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function yf(a,t,e,n){const i={},s=new WeakMap;function r(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete i[u.id];const p=s.get(u);p&&(t.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],34962);const p=d.morphAttributes;for(const g in p){const m=p[g];for(let f=0,v=m.length;f<v;f++)t.update(m[f],34962)}}function c(d){const u=[],p=d.index,g=d.attributes.position;let m=0;if(p!==null){const x=p.array;m=p.version;for(let _=0,w=x.length;_<w;_+=3){const y=x[_+0],A=x[_+1],D=x[_+2];u.push(y,A,A,D,D,y)}}else{const x=g.array;m=g.version;for(let _=0,w=x.length/3-1;_<w;_+=3){const y=_+0,A=_+1,D=_+2;u.push(y,A,A,D,D,y)}}const f=new(bl(u)?Ll:Cl)(u,1);f.version=m;const v=s.get(d);v&&t.remove(v),s.set(d,f)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function bf(a,t,e,n){const i=n.isWebGL2;let s;function r(u){s=u}let o,l;function c(u){o=u.type,l=u.bytesPerElement}function h(u,p){a.drawElements(s,p,o,u*l),e.update(p,s,1)}function d(u,p,g){if(g===0)return;let m,f;if(i)m=a,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,p,o,u*l,g),e.update(p,s,g)}this.setMode=r,this.setIndex=c,this.render=h,this.renderInstances=d}function wf(a){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(e.calls++,r){case 4:e.triangles+=o*(s/3);break;case 1:e.lines+=o*(s/2);break;case 3:e.lines+=o*(s-1);break;case 2:e.lines+=o*s;break;case 0:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Mf(a,t){return a[0]-t[0]}function Sf(a,t){return Math.abs(t[1])-Math.abs(a[1])}function Ef(a,t,e){const n={},i=new Float32Array(8),s=new WeakMap,r=new de,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d,u){const p=c.morphTargetInfluences;if(t.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,f=m!==void 0?m.length:0;let v=s.get(h);if(v===void 0||v.count!==f){let N=function(){P.dispose(),s.delete(h),h.removeEventListener("dispose",N)};var g=N;v!==void 0&&v.texture.dispose();const w=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,D=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let I=0;w===!0&&(I=1),y===!0&&(I=2),A===!0&&(I=3);let U=h.attributes.position.count*I,J=1;U>t.maxTextureSize&&(J=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const C=new Float32Array(U*J*4*f),P=new El(C,U,J,f);P.type=Bn,P.needsUpdate=!0;const z=I*4;for(let Z=0;Z<f;Z++){const G=D[Z],X=b[Z],et=L[Z],H=U*J*4*Z;for(let B=0;B<G.count;B++){const nt=B*z;w===!0&&(r.fromBufferAttribute(G,B),C[H+nt+0]=r.x,C[H+nt+1]=r.y,C[H+nt+2]=r.z,C[H+nt+3]=0),y===!0&&(r.fromBufferAttribute(X,B),C[H+nt+4]=r.x,C[H+nt+5]=r.y,C[H+nt+6]=r.z,C[H+nt+7]=0),A===!0&&(r.fromBufferAttribute(et,B),C[H+nt+8]=r.x,C[H+nt+9]=r.y,C[H+nt+10]=r.z,C[H+nt+11]=et.itemSize===4?r.w:1)}}v={count:f,texture:P,size:new lt(U,J)},s.set(h,v),h.addEventListener("dispose",N)}let x=0;for(let w=0;w<p.length;w++)x+=p[w];const _=h.morphTargetsRelative?1:1-x;u.getUniforms().setValue(a,"morphTargetBaseInfluence",_),u.getUniforms().setValue(a,"morphTargetInfluences",p),u.getUniforms().setValue(a,"morphTargetsTexture",v.texture,e),u.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}else{const m=p===void 0?0:p.length;let f=n[h.id];if(f===void 0||f.length!==m){f=[];for(let y=0;y<m;y++)f[y]=[y,0];n[h.id]=f}for(let y=0;y<m;y++){const A=f[y];A[0]=y,A[1]=p[y]}f.sort(Sf);for(let y=0;y<8;y++)y<m&&f[y][1]?(o[y][0]=f[y][0],o[y][1]=f[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Mf);const v=h.morphAttributes.position,x=h.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const A=o[y],D=A[0],b=A[1];D!==Number.MAX_SAFE_INTEGER&&b?(v&&h.getAttribute("morphTarget"+y)!==v[D]&&h.setAttribute("morphTarget"+y,v[D]),x&&h.getAttribute("morphNormal"+y)!==x[D]&&h.setAttribute("morphNormal"+y,x[D]),i[y]=b,_+=b):(v&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),x&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const w=h.morphTargetsRelative?1:1-_;u.getUniforms().setValue(a,"morphTargetBaseInfluence",w),u.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function Af(a,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);return i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),d}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:r}}const zl=new we,Nl=new El,Fl=new hh,Ol=new io,_a=[],ya=[],ba=new Float32Array(16),wa=new Float32Array(9),Ma=new Float32Array(4);function Ci(a,t,e){const n=a[0];if(n<=0||n>0)return a;const i=t*e;let s=_a[i];if(s===void 0&&(s=new Float32Array(i),_a[i]=s),t!==0){n.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=e,a[r].toArray(s,o)}return s}function ae(a,t){if(a.length!==t.length)return!1;for(let e=0,n=a.length;e<n;e++)if(a[e]!==t[e])return!1;return!0}function le(a,t){for(let e=0,n=t.length;e<n;e++)a[e]=t[e]}function Gs(a,t){let e=ya[t];e===void 0&&(e=new Int32Array(t),ya[t]=e);for(let n=0;n!==t;++n)e[n]=a.allocateTextureUnit();return e}function Tf(a,t){const e=this.cache;e[0]!==t&&(a.uniform1f(this.addr,t),e[0]=t)}function Cf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;a.uniform2fv(this.addr,t),le(e,t)}}function Lf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ae(e,t))return;a.uniform3fv(this.addr,t),le(e,t)}}function Pf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;a.uniform4fv(this.addr,t),le(e,t)}}function Rf(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;a.uniformMatrix2fv(this.addr,!1,t),le(e,t)}else{if(ae(e,n))return;Ma.set(n),a.uniformMatrix2fv(this.addr,!1,Ma),le(e,n)}}function Df(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;a.uniformMatrix3fv(this.addr,!1,t),le(e,t)}else{if(ae(e,n))return;wa.set(n),a.uniformMatrix3fv(this.addr,!1,wa),le(e,n)}}function If(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;a.uniformMatrix4fv(this.addr,!1,t),le(e,t)}else{if(ae(e,n))return;ba.set(n),a.uniformMatrix4fv(this.addr,!1,ba),le(e,n)}}function zf(a,t){const e=this.cache;e[0]!==t&&(a.uniform1i(this.addr,t),e[0]=t)}function Nf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;a.uniform2iv(this.addr,t),le(e,t)}}function Ff(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ae(e,t))return;a.uniform3iv(this.addr,t),le(e,t)}}function Of(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;a.uniform4iv(this.addr,t),le(e,t)}}function Bf(a,t){const e=this.cache;e[0]!==t&&(a.uniform1ui(this.addr,t),e[0]=t)}function Uf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;a.uniform2uiv(this.addr,t),le(e,t)}}function kf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ae(e,t))return;a.uniform3uiv(this.addr,t),le(e,t)}}function Vf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;a.uniform4uiv(this.addr,t),le(e,t)}}function Gf(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||zl,i)}function Hf(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Fl,i)}function Wf(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ol,i)}function qf(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Nl,i)}function Xf(a){switch(a){case 5126:return Tf;case 35664:return Cf;case 35665:return Lf;case 35666:return Pf;case 35674:return Rf;case 35675:return Df;case 35676:return If;case 5124:case 35670:return zf;case 35667:case 35671:return Nf;case 35668:case 35672:return Ff;case 35669:case 35673:return Of;case 5125:return Bf;case 36294:return Uf;case 36295:return kf;case 36296:return Vf;case 35678:case 36198:case 36298:case 36306:case 35682:return Gf;case 35679:case 36299:case 36307:return Hf;case 35680:case 36300:case 36308:case 36293:return Wf;case 36289:case 36303:case 36311:case 36292:return qf}}function $f(a,t){a.uniform1fv(this.addr,t)}function Yf(a,t){const e=Ci(t,this.size,2);a.uniform2fv(this.addr,e)}function jf(a,t){const e=Ci(t,this.size,3);a.uniform3fv(this.addr,e)}function Zf(a,t){const e=Ci(t,this.size,4);a.uniform4fv(this.addr,e)}function Jf(a,t){const e=Ci(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,e)}function Kf(a,t){const e=Ci(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,e)}function Qf(a,t){const e=Ci(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,e)}function tp(a,t){a.uniform1iv(this.addr,t)}function ep(a,t){a.uniform2iv(this.addr,t)}function np(a,t){a.uniform3iv(this.addr,t)}function ip(a,t){a.uniform4iv(this.addr,t)}function sp(a,t){a.uniform1uiv(this.addr,t)}function rp(a,t){a.uniform2uiv(this.addr,t)}function op(a,t){a.uniform3uiv(this.addr,t)}function ap(a,t){a.uniform4uiv(this.addr,t)}function lp(a,t,e){const n=this.cache,i=t.length,s=Gs(e,i);ae(n,s)||(a.uniform1iv(this.addr,s),le(n,s));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||zl,s[r])}function cp(a,t,e){const n=this.cache,i=t.length,s=Gs(e,i);ae(n,s)||(a.uniform1iv(this.addr,s),le(n,s));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Fl,s[r])}function hp(a,t,e){const n=this.cache,i=t.length,s=Gs(e,i);ae(n,s)||(a.uniform1iv(this.addr,s),le(n,s));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||Ol,s[r])}function up(a,t,e){const n=this.cache,i=t.length,s=Gs(e,i);ae(n,s)||(a.uniform1iv(this.addr,s),le(n,s));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||Nl,s[r])}function dp(a){switch(a){case 5126:return $f;case 35664:return Yf;case 35665:return jf;case 35666:return Zf;case 35674:return Jf;case 35675:return Kf;case 35676:return Qf;case 5124:case 35670:return tp;case 35667:case 35671:return ep;case 35668:case 35672:return np;case 35669:case 35673:return ip;case 5125:return sp;case 36294:return rp;case 36295:return op;case 36296:return ap;case 35678:case 36198:case 36298:case 36306:case 35682:return lp;case 35679:case 36299:case 36307:return cp;case 35680:case 36300:case 36308:case 36293:return hp;case 36289:case 36303:case 36311:case 36292:return up}}class fp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Xf(e.type)}}class pp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=dp(e.type)}}class mp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Tr=/(\w+)(\])?(\[|\.)?/g;function Sa(a,t){a.seq.push(t),a.map[t.id]=t}function gp(a,t,e){const n=a.name,i=n.length;for(Tr.lastIndex=0;;){const s=Tr.exec(n),r=Tr.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){Sa(e,c===void 0?new fp(o,a,t):new pp(o,a,t));break}else{let d=e.map[o];d===void 0&&(d=new mp(o),Sa(e,d)),e=d}}}class Os{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);gp(s,r,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Ea(a,t,e){const n=a.createShader(t);return a.shaderSource(n,e),a.compileShader(n),n}let vp=0;function xp(a,t){const e=a.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}function _p(a){switch(a){case Hn:return["Linear","( value )"];case Zt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Aa(a,t,e){const n=a.getShaderParameter(t,35713),i=a.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+xp(a.getShaderSource(t),r)}else return i}function yp(a,t){const e=_p(t);return"vec4 "+a+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function bp(a,t){let e;switch(t){case Oc:e="Linear";break;case Bc:e="Reinhard";break;case Uc:e="OptimizedCineon";break;case kc:e="ACESFilmic";break;case Vc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+a+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function wp(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Gi).join(`
`)}function Mp(a){const t=[];for(const e in a){const n=a[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Sp(a,t){const e={},n=a.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=a.getActiveAttrib(t,i),r=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),e[r]={type:s.type,location:a.getAttribLocation(t,r),locationSize:o}}return e}function Gi(a){return a!==""}function Ta(a,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ca(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ep=/^[ \t]*#include +<([\w\d./]+)>/gm;function jr(a){return a.replace(Ep,Ap)}function Ap(a,t){const e=zt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return jr(e)}const Tp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function La(a){return a.replace(Tp,Cp)}function Cp(a,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Pa(a){let t="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Lp(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===fl?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===pl?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Vi&&(t="SHADOWMAP_TYPE_VSM"),t}function Pp(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case bi:case wi:t="ENVMAP_TYPE_CUBE";break;case ks:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Rp(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case wi:t="ENVMAP_MODE_REFRACTION";break}return t}function Dp(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case vl:t="ENVMAP_BLENDING_MULTIPLY";break;case Nc:t="ENVMAP_BLENDING_MIX";break;case Fc:t="ENVMAP_BLENDING_ADD";break}return t}function Ip(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function zp(a,t,e,n){const i=a.getContext(),s=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=Lp(e),c=Pp(e),h=Rp(e),d=Dp(e),u=Ip(e),p=e.isWebGL2?"":wp(e),g=Mp(s),m=i.createProgram();let f,v,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=[g].filter(Gi).join(`
`),f.length>0&&(f+=`
`),v=[p,g].filter(Gi).join(`
`),v.length>0&&(v+=`
`)):(f=[Pa(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gi).join(`
`),v=[p,Pa(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pn?"#define TONE_MAPPING":"",e.toneMapping!==pn?zt.tonemapping_pars_fragment:"",e.toneMapping!==pn?bp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.encodings_pars_fragment,yp("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gi).join(`
`)),r=jr(r),r=Ta(r,e),r=Ca(r,e),o=jr(o),o=Ta(o,e),o=Ca(o,e),r=La(r),o=La(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["#define varying in",e.glslVersion===Qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const _=x+f+r,w=x+v+o,y=Ea(i,35633,_),A=Ea(i,35632,w);if(i.attachShader(m,y),i.attachShader(m,A),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),a.debug.checkShaderErrors){const L=i.getProgramInfoLog(m).trim(),I=i.getShaderInfoLog(y).trim(),U=i.getShaderInfoLog(A).trim();let J=!0,C=!0;if(i.getProgramParameter(m,35714)===!1){J=!1;const P=Aa(i,y,"vertex"),z=Aa(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+L+`
`+P+`
`+z)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(I===""||U==="")&&(C=!1);C&&(this.diagnostics={runnable:J,programLog:L,vertexShader:{log:I,prefix:f},fragmentShader:{log:U,prefix:v}})}i.deleteShader(y),i.deleteShader(A);let D;this.getUniforms=function(){return D===void 0&&(D=new Os(i,m)),D};let b;return this.getAttributes=function(){return b===void 0&&(b=Sp(i,m)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=e.shaderName,this.id=vp++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=A,this}let Np=0;class Fp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Op(t),e.set(t,n)),n}}class Op{constructor(t){this.id=Np++,this.code=t,this.usedTimes=0}}function Bp(a,t,e,n,i,s,r){const o=new Al,l=new Fp,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b,L,I,U,J){const C=U.fog,P=J.geometry,z=b.isMeshStandardMaterial?U.environment:null,N=(b.isMeshStandardMaterial?e:t).get(b.envMap||z),Z=N&&N.mapping===ks?N.image.height:null,G=g[b.type];b.precision!==null&&(p=i.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const X=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,et=X!==void 0?X.length:0;let H=0;P.morphAttributes.position!==void 0&&(H=1),P.morphAttributes.normal!==void 0&&(H=2),P.morphAttributes.color!==void 0&&(H=3);let B,nt,st,ct;if(G){const It=Ye[G];B=It.vertexShader,nt=It.fragmentShader}else B=b.vertexShader,nt=b.fragmentShader,l.update(b),st=l.getVertexShaderID(b),ct=l.getFragmentShaderID(b);const $=a.getRenderTarget(),Pt=b.alphaTest>0,yt=b.clearcoat>0,Ct=b.iridescence>0;return{isWebGL2:h,shaderID:G,shaderName:b.type,vertexShader:B,fragmentShader:nt,defines:b.defines,customVertexShaderID:st,customFragmentShaderID:ct,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,instancing:J.isInstancedMesh===!0,instancingColor:J.isInstancedMesh===!0&&J.instanceColor!==null,supportsVertexTextures:u,outputEncoding:$===null?a.outputEncoding:$.isXRRenderTarget===!0?$.texture.encoding:Hn,map:!!b.map,matcap:!!b.matcap,envMap:!!N,envMapMode:N&&N.mapping,envMapCubeUVHeight:Z,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===oh,tangentSpaceNormalMap:b.normalMapType===yl,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===Zt,clearcoat:yt,clearcoatMap:yt&&!!b.clearcoatMap,clearcoatRoughnessMap:yt&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:yt&&!!b.clearcoatNormalMap,iridescence:Ct,iridescenceMap:Ct&&!!b.iridescenceMap,iridescenceThicknessMap:Ct&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===xi,alphaMap:!!b.alphaMap,alphaTest:Pt,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!P.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(b.map||b.bumpMap||b.normalMap||b.specularMap||b.alphaMap||b.emissiveMap||b.roughnessMap||b.metalnessMap||b.clearcoatNormalMap||b.iridescenceMap||b.iridescenceThicknessMap||b.transmission>0||b.transmissionMap||b.thicknessMap||b.specularIntensityMap||b.specularColorMap||b.sheen>0||b.sheenColorMap||b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!C,useFog:b.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:d,skinning:J.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:H,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:a.shadowMap.enabled&&I.length>0,shadowMapType:a.shadowMap.type,toneMapping:b.toneMapped?a.toneMapping:pn,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===eo,flipSided:b.side===Ne,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function f(b){const L=[];if(b.shaderID?L.push(b.shaderID):(L.push(b.customVertexShaderID),L.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)L.push(I),L.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(v(L,b),x(L,b),L.push(a.outputEncoding)),L.push(b.customProgramCacheKey),L.join()}function v(b,L){b.push(L.precision),b.push(L.outputEncoding),b.push(L.envMapMode),b.push(L.envMapCubeUVHeight),b.push(L.combine),b.push(L.vertexUvs),b.push(L.fogExp2),b.push(L.sizeAttenuation),b.push(L.morphTargetsCount),b.push(L.morphAttributeCount),b.push(L.numDirLights),b.push(L.numPointLights),b.push(L.numSpotLights),b.push(L.numSpotLightMaps),b.push(L.numHemiLights),b.push(L.numRectAreaLights),b.push(L.numDirLightShadows),b.push(L.numPointLightShadows),b.push(L.numSpotLightShadows),b.push(L.numSpotLightShadowsWithMaps),b.push(L.shadowMapType),b.push(L.toneMapping),b.push(L.numClippingPlanes),b.push(L.numClipIntersection),b.push(L.depthPacking)}function x(b,L){o.disableAll(),L.isWebGL2&&o.enable(0),L.supportsVertexTextures&&o.enable(1),L.instancing&&o.enable(2),L.instancingColor&&o.enable(3),L.map&&o.enable(4),L.matcap&&o.enable(5),L.envMap&&o.enable(6),L.lightMap&&o.enable(7),L.aoMap&&o.enable(8),L.emissiveMap&&o.enable(9),L.bumpMap&&o.enable(10),L.normalMap&&o.enable(11),L.objectSpaceNormalMap&&o.enable(12),L.tangentSpaceNormalMap&&o.enable(13),L.clearcoat&&o.enable(14),L.clearcoatMap&&o.enable(15),L.clearcoatRoughnessMap&&o.enable(16),L.clearcoatNormalMap&&o.enable(17),L.iridescence&&o.enable(18),L.iridescenceMap&&o.enable(19),L.iridescenceThicknessMap&&o.enable(20),L.displacementMap&&o.enable(21),L.specularMap&&o.enable(22),L.roughnessMap&&o.enable(23),L.metalnessMap&&o.enable(24),L.gradientMap&&o.enable(25),L.alphaMap&&o.enable(26),L.alphaTest&&o.enable(27),L.vertexColors&&o.enable(28),L.vertexAlphas&&o.enable(29),L.vertexUvs&&o.enable(30),L.vertexTangents&&o.enable(31),L.uvsVertexOnly&&o.enable(32),b.push(o.mask),o.disableAll(),L.fog&&o.enable(0),L.useFog&&o.enable(1),L.flatShading&&o.enable(2),L.logarithmicDepthBuffer&&o.enable(3),L.skinning&&o.enable(4),L.morphTargets&&o.enable(5),L.morphNormals&&o.enable(6),L.morphColors&&o.enable(7),L.premultipliedAlpha&&o.enable(8),L.shadowMapEnabled&&o.enable(9),L.physicallyCorrectLights&&o.enable(10),L.doubleSided&&o.enable(11),L.flipSided&&o.enable(12),L.useDepthPacking&&o.enable(13),L.dithering&&o.enable(14),L.specularIntensityMap&&o.enable(15),L.specularColorMap&&o.enable(16),L.transmission&&o.enable(17),L.transmissionMap&&o.enable(18),L.thicknessMap&&o.enable(19),L.sheen&&o.enable(20),L.sheenColorMap&&o.enable(21),L.sheenRoughnessMap&&o.enable(22),L.decodeVideoTexture&&o.enable(23),L.opaque&&o.enable(24),b.push(o.mask)}function _(b){const L=g[b.type];let I;if(L){const U=Ye[L];I=Mh.clone(U.uniforms)}else I=b.uniforms;return I}function w(b,L){let I;for(let U=0,J=c.length;U<J;U++){const C=c[U];if(C.cacheKey===L){I=C,++I.usedTimes;break}}return I===void 0&&(I=new zp(a,L,b,s),c.push(I)),I}function y(b){if(--b.usedTimes===0){const L=c.indexOf(b);c[L]=c[c.length-1],c.pop(),b.destroy()}}function A(b){l.remove(b)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:w,releaseProgram:y,releaseShaderCache:A,programs:c,dispose:D}}function Up(){let a=new WeakMap;function t(s){let r=a.get(s);return r===void 0&&(r={},a.set(s,r)),r}function e(s){a.delete(s)}function n(s,r,o){a.get(s)[r]=o}function i(){a=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function kp(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function Ra(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function Da(){const a=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function r(d,u,p,g,m,f){let v=a[t];return v===void 0?(v={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:m,group:f},a[t]=v):(v.id=d.id,v.object=d,v.geometry=u,v.material=p,v.groupOrder=g,v.renderOrder=d.renderOrder,v.z=m,v.group=f),t++,v}function o(d,u,p,g,m,f){const v=r(d,u,p,g,m,f);p.transmission>0?n.push(v):p.transparent===!0?i.push(v):e.push(v)}function l(d,u,p,g,m,f){const v=r(d,u,p,g,m,f);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):e.unshift(v)}function c(d,u){e.length>1&&e.sort(d||kp),n.length>1&&n.sort(u||Ra),i.length>1&&i.sort(u||Ra)}function h(){for(let d=t,u=a.length;d<u;d++){const p=a[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function Vp(){let a=new WeakMap;function t(n,i){const s=a.get(n);let r;return s===void 0?(r=new Da,a.set(n,[r])):i>=s.length?(r=new Da,s.push(r)):r=s[i],r}function e(){a=new WeakMap}return{get:t,dispose:e}}function Gp(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Yt};break;case"SpotLight":e={position:new O,direction:new O,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new O,halfWidth:new O,halfHeight:new O};break}return a[t.id]=e,e}}}function Hp(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=e,e}}}let Wp=0;function qp(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function Xp(a,t){const e=new Gp,n=Hp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new O);const s=new O,r=new se,o=new se;function l(h,d){let u=0,p=0,g=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let m=0,f=0,v=0,x=0,_=0,w=0,y=0,A=0,D=0,b=0;h.sort(qp);const L=d!==!0?Math.PI:1;for(let U=0,J=h.length;U<J;U++){const C=h[U],P=C.color,z=C.intensity,N=C.distance,Z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=P.r*z*L,p+=P.g*z*L,g+=P.b*z*L;else if(C.isLightProbe)for(let G=0;G<9;G++)i.probe[G].addScaledVector(C.sh.coefficients[G],z);else if(C.isDirectionalLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity*L),C.castShadow){const X=C.shadow,et=n.get(C);et.shadowBias=X.bias,et.shadowNormalBias=X.normalBias,et.shadowRadius=X.radius,et.shadowMapSize=X.mapSize,i.directionalShadow[m]=et,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=C.shadow.matrix,w++}i.directional[m]=G,m++}else if(C.isSpotLight){const G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(P).multiplyScalar(z*L),G.distance=N,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,i.spot[v]=G;const X=C.shadow;if(C.map&&(i.spotLightMap[D]=C.map,D++,X.updateMatrices(C),C.castShadow&&b++),i.spotLightMatrix[v]=X.matrix,C.castShadow){const et=n.get(C);et.shadowBias=X.bias,et.shadowNormalBias=X.normalBias,et.shadowRadius=X.radius,et.shadowMapSize=X.mapSize,i.spotShadow[v]=et,i.spotShadowMap[v]=Z,A++}v++}else if(C.isRectAreaLight){const G=e.get(C);G.color.copy(P).multiplyScalar(z),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),i.rectArea[x]=G,x++}else if(C.isPointLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity*L),G.distance=C.distance,G.decay=C.decay,C.castShadow){const X=C.shadow,et=n.get(C);et.shadowBias=X.bias,et.shadowNormalBias=X.normalBias,et.shadowRadius=X.radius,et.shadowMapSize=X.mapSize,et.shadowCameraNear=X.camera.near,et.shadowCameraFar=X.camera.far,i.pointShadow[f]=et,i.pointShadowMap[f]=Z,i.pointShadowMatrix[f]=C.shadow.matrix,y++}i.point[f]=G,f++}else if(C.isHemisphereLight){const G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(z*L),G.groundColor.copy(C.groundColor).multiplyScalar(z*L),i.hemi[_]=G,_++}}x>0&&(t.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=g;const I=i.hash;(I.directionalLength!==m||I.pointLength!==f||I.spotLength!==v||I.rectAreaLength!==x||I.hemiLength!==_||I.numDirectionalShadows!==w||I.numPointShadows!==y||I.numSpotShadows!==A||I.numSpotMaps!==D)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=x,i.point.length=f,i.hemi.length=_,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=A+D-b,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=b,I.directionalLength=m,I.pointLength=f,I.spotLength=v,I.rectAreaLength=x,I.hemiLength=_,I.numDirectionalShadows=w,I.numPointShadows=y,I.numSpotShadows=A,I.numSpotMaps=D,i.version=Wp++)}function c(h,d){let u=0,p=0,g=0,m=0,f=0;const v=d.matrixWorldInverse;for(let x=0,_=h.length;x<_;x++){const w=h[x];if(w.isDirectionalLight){const y=i.directional[u];y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(v),u++}else if(w.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(v),y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(v),g++}else if(w.isRectAreaLight){const y=i.rectArea[m];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(v),o.identity(),r.copy(w.matrixWorld),r.premultiply(v),o.extractRotation(r),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(w.isPointLight){const y=i.point[p];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(v),p++}else if(w.isHemisphereLight){const y=i.hemi[f];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(v),f++}}}return{setup:l,setupView:c,state:i}}function Ia(a,t){const e=new Xp(a,t),n=[],i=[];function s(){n.length=0,i.length=0}function r(d){n.push(d)}function o(d){i.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function $p(a,t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let l;return o===void 0?(l=new Ia(a,t),e.set(s,[l])):r>=o.length?(l=new Ia(a,t),o.push(l)):l=o[r],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Yp extends is{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class jp extends is{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Zp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Kp(a,t,e){let n=new so;const i=new lt,s=new lt,r=new de,o=new Yp({depthPacking:rh}),l=new jp,c={},h=e.maxTextureSize,d={0:Ne,1:Vn,2:eo},u=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:Zp,fragmentShader:Jp}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new mn;g.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new ze(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fl,this.render=function(w,y,A){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;const D=a.getRenderTarget(),b=a.getActiveCubeFace(),L=a.getActiveMipmapLevel(),I=a.state;I.setBlending(Mn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let U=0,J=w.length;U<J;U++){const C=w[U],P=C.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",C,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const z=P.getFrameExtents();if(i.multiply(z),s.copy(P.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/z.x),i.x=s.x*z.x,P.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/z.y),i.y=s.y*z.y,P.mapSize.y=s.y)),P.map===null){const Z=this.type!==Vi?{minFilter:ye,magFilter:ye}:{};P.map=new Wn(i.x,i.y,Z),P.map.texture.name=C.name+".shadowMap",P.camera.updateProjectionMatrix()}a.setRenderTarget(P.map),a.clear();const N=P.getViewportCount();for(let Z=0;Z<N;Z++){const G=P.getViewport(Z);r.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),I.viewport(r),P.updateMatrices(C,Z),n=P.getFrustum(),_(y,A,P.camera,C,this.type)}P.isPointLightShadow!==!0&&this.type===Vi&&v(P,A),P.needsUpdate=!1}f.needsUpdate=!1,a.setRenderTarget(D,b,L)};function v(w,y){const A=t.update(m);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Wn(i.x,i.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,a.setRenderTarget(w.mapPass),a.clear(),a.renderBufferDirect(y,null,A,u,m,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,a.setRenderTarget(w.map),a.clear(),a.renderBufferDirect(y,null,A,p,m,null)}function x(w,y,A,D,b,L){let I=null;const U=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)I=U;else if(I=A.isPointLight===!0?l:o,a.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const J=I.uuid,C=y.uuid;let P=c[J];P===void 0&&(P={},c[J]=P);let z=P[C];z===void 0&&(z=I.clone(),P[C]=z),I=z}return I.visible=y.visible,I.wireframe=y.wireframe,L===Vi?I.side=y.shadowSide!==null?y.shadowSide:y.side:I.side=y.shadowSide!==null?y.shadowSide:d[y.side],I.alphaMap=y.alphaMap,I.alphaTest=y.alphaTest,I.map=y.map,I.clipShadows=y.clipShadows,I.clippingPlanes=y.clippingPlanes,I.clipIntersection=y.clipIntersection,I.displacementMap=y.displacementMap,I.displacementScale=y.displacementScale,I.displacementBias=y.displacementBias,I.wireframeLinewidth=y.wireframeLinewidth,I.linewidth=y.linewidth,A.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(A.matrixWorld),I.nearDistance=D,I.farDistance=b),I}function _(w,y,A,D,b){if(w.visible===!1)return;if(w.layers.test(y.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===Vi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const U=t.update(w),J=w.material;if(Array.isArray(J)){const C=U.groups;for(let P=0,z=C.length;P<z;P++){const N=C[P],Z=J[N.materialIndex];if(Z&&Z.visible){const G=x(w,Z,D,A.near,A.far,b);a.renderBufferDirect(A,null,U,G,w,N)}}}else if(J.visible){const C=x(w,J,D,A.near,A.far,b);a.renderBufferDirect(A,null,U,C,w,null)}}const I=w.children;for(let U=0,J=I.length;U<J;U++)_(I[U],y,A,D,b)}}function Qp(a,t,e){const n=e.isWebGL2;function i(){let F=!1;const Y=new de;let rt=null;const gt=new de(0,0,0,0);return{setMask:function(St){rt!==St&&!F&&(a.colorMask(St,St,St,St),rt=St)},setLocked:function(St){F=St},setClear:function(St,qt,ce,fe,En){En===!0&&(St*=fe,qt*=fe,ce*=fe),Y.set(St,qt,ce,fe),gt.equals(Y)===!1&&(a.clearColor(St,qt,ce,fe),gt.copy(Y))},reset:function(){F=!1,rt=null,gt.set(-1,0,0,0)}}}function s(){let F=!1,Y=null,rt=null,gt=null;return{setTest:function(St){St?Pt(2929):yt(2929)},setMask:function(St){Y!==St&&!F&&(a.depthMask(St),Y=St)},setFunc:function(St){if(rt!==St){switch(St){case Cc:a.depthFunc(512);break;case Lc:a.depthFunc(519);break;case Pc:a.depthFunc(513);break;case Gr:a.depthFunc(515);break;case Rc:a.depthFunc(514);break;case Dc:a.depthFunc(518);break;case Ic:a.depthFunc(516);break;case zc:a.depthFunc(517);break;default:a.depthFunc(515)}rt=St}},setLocked:function(St){F=St},setClear:function(St){gt!==St&&(a.clearDepth(St),gt=St)},reset:function(){F=!1,Y=null,rt=null,gt=null}}}function r(){let F=!1,Y=null,rt=null,gt=null,St=null,qt=null,ce=null,fe=null,En=null;return{setTest:function(Jt){F||(Jt?Pt(2960):yt(2960))},setMask:function(Jt){Y!==Jt&&!F&&(a.stencilMask(Jt),Y=Jt)},setFunc:function(Jt,tn,Pe){(rt!==Jt||gt!==tn||St!==Pe)&&(a.stencilFunc(Jt,tn,Pe),rt=Jt,gt=tn,St=Pe)},setOp:function(Jt,tn,Pe){(qt!==Jt||ce!==tn||fe!==Pe)&&(a.stencilOp(Jt,tn,Pe),qt=Jt,ce=tn,fe=Pe)},setLocked:function(Jt){F=Jt},setClear:function(Jt){En!==Jt&&(a.clearStencil(Jt),En=Jt)},reset:function(){F=!1,Y=null,rt=null,gt=null,St=null,qt=null,ce=null,fe=null,En=null}}}const o=new i,l=new s,c=new r,h=new WeakMap,d=new WeakMap;let u={},p={},g=new WeakMap,m=[],f=null,v=!1,x=null,_=null,w=null,y=null,A=null,D=null,b=null,L=!1,I=null,U=null,J=null,C=null,P=null;const z=a.getParameter(35661);let N=!1,Z=0;const G=a.getParameter(7938);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),N=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),N=Z>=2);let X=null,et={};const H=a.getParameter(3088),B=a.getParameter(2978),nt=new de().fromArray(H),st=new de().fromArray(B);function ct(F,Y,rt){const gt=new Uint8Array(4),St=a.createTexture();a.bindTexture(F,St),a.texParameteri(F,10241,9728),a.texParameteri(F,10240,9728);for(let qt=0;qt<rt;qt++)a.texImage2D(Y+qt,0,6408,1,1,0,6408,5121,gt);return St}const $={};$[3553]=ct(3553,3553,1),$[34067]=ct(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pt(2929),l.setFunc(Gr),ht(!1),Rt(So),Pt(2884),at(Mn);function Pt(F){u[F]!==!0&&(a.enable(F),u[F]=!0)}function yt(F){u[F]!==!1&&(a.disable(F),u[F]=!1)}function Ct(F,Y){return p[F]!==Y?(a.bindFramebuffer(F,Y),p[F]=Y,n&&(F===36009&&(p[36160]=Y),F===36160&&(p[36009]=Y)),!0):!1}function dt(F,Y){let rt=m,gt=!1;if(F)if(rt=g.get(Y),rt===void 0&&(rt=[],g.set(Y,rt)),F.isWebGLMultipleRenderTargets){const St=F.texture;if(rt.length!==St.length||rt[0]!==36064){for(let qt=0,ce=St.length;qt<ce;qt++)rt[qt]=36064+qt;rt.length=St.length,gt=!0}}else rt[0]!==36064&&(rt[0]=36064,gt=!0);else rt[0]!==1029&&(rt[0]=1029,gt=!0);gt&&(e.isWebGL2?a.drawBuffers(rt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(rt))}function It(F){return f!==F?(a.useProgram(F),f=F,!0):!1}const tt={[pi]:32774,[vc]:32778,[xc]:32779};if(n)tt[Co]=32775,tt[Lo]=32776;else{const F=t.get("EXT_blend_minmax");F!==null&&(tt[Co]=F.MIN_EXT,tt[Lo]=F.MAX_EXT)}const Q={[_c]:0,[yc]:1,[bc]:768,[ml]:770,[Tc]:776,[Ec]:774,[Mc]:772,[wc]:769,[gl]:771,[Ac]:775,[Sc]:773};function at(F,Y,rt,gt,St,qt,ce,fe){if(F===Mn){v===!0&&(yt(3042),v=!1);return}if(v===!1&&(Pt(3042),v=!0),F!==gc){if(F!==x||fe!==L){if((_!==pi||A!==pi)&&(a.blendEquation(32774),_=pi,A=pi),fe)switch(F){case xi:a.blendFuncSeparate(1,771,1,771);break;case Eo:a.blendFunc(1,1);break;case Ao:a.blendFuncSeparate(0,769,0,1);break;case To:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case xi:a.blendFuncSeparate(770,771,1,771);break;case Eo:a.blendFunc(770,1);break;case Ao:a.blendFuncSeparate(0,769,0,1);break;case To:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,y=null,D=null,b=null,x=F,L=fe}return}St=St||Y,qt=qt||rt,ce=ce||gt,(Y!==_||St!==A)&&(a.blendEquationSeparate(tt[Y],tt[St]),_=Y,A=St),(rt!==w||gt!==y||qt!==D||ce!==b)&&(a.blendFuncSeparate(Q[rt],Q[gt],Q[qt],Q[ce]),w=rt,y=gt,D=qt,b=ce),x=F,L=!1}function bt(F,Y){F.side===eo?yt(2884):Pt(2884);let rt=F.side===Ne;Y&&(rt=!rt),ht(rt),F.blending===xi&&F.transparent===!1?at(Mn):at(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),o.setMask(F.colorWrite);const gt=F.stencilWrite;c.setTest(gt),gt&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Et(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Pt(32926):yt(32926)}function ht(F){I!==F&&(F?a.frontFace(2304):a.frontFace(2305),I=F)}function Rt(F){F!==pc?(Pt(2884),F!==U&&(F===So?a.cullFace(1029):F===mc?a.cullFace(1028):a.cullFace(1032))):yt(2884),U=F}function At(F){F!==J&&(N&&a.lineWidth(F),J=F)}function Et(F,Y,rt){F?(Pt(32823),(C!==Y||P!==rt)&&(a.polygonOffset(Y,rt),C=Y,P=rt)):yt(32823)}function Xt(F){F?Pt(3089):yt(3089)}function Gt(F){F===void 0&&(F=33984+z-1),X!==F&&(a.activeTexture(F),X=F)}function T(F,Y,rt){rt===void 0&&(X===null?rt=33984+z-1:rt=X);let gt=et[rt];gt===void 0&&(gt={type:void 0,texture:void 0},et[rt]=gt),(gt.type!==F||gt.texture!==Y)&&(X!==rt&&(a.activeTexture(rt),X=rt),a.bindTexture(F,Y||$[F]),gt.type=F,gt.texture=Y)}function S(){const F=et[X];F!==void 0&&F.type!==void 0&&(a.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function q(){try{a.compressedTexImage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{a.compressedTexImage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ot(){try{a.texSubImage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{a.texSubImage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Lt(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function R(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function k(){try{a.texStorage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{a.texStorage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _t(){try{a.texImage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{a.texImage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Mt(F){nt.equals(F)===!1&&(a.scissor(F.x,F.y,F.z,F.w),nt.copy(F))}function wt(F){st.equals(F)===!1&&(a.viewport(F.x,F.y,F.z,F.w),st.copy(F))}function Ot(F,Y){let rt=d.get(Y);rt===void 0&&(rt=new WeakMap,d.set(Y,rt));let gt=rt.get(F);gt===void 0&&(gt=a.getUniformBlockIndex(Y,F.name),rt.set(F,gt))}function Bt(F,Y){const gt=d.get(Y).get(F);h.get(Y)!==gt&&(a.uniformBlockBinding(Y,gt,F.__bindingPointIndex),h.set(Y,gt))}function $t(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},X=null,et={},p={},g=new WeakMap,m=[],f=null,v=!1,x=null,_=null,w=null,y=null,A=null,D=null,b=null,L=!1,I=null,U=null,J=null,C=null,P=null,nt.set(0,0,a.canvas.width,a.canvas.height),st.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Pt,disable:yt,bindFramebuffer:Ct,drawBuffers:dt,useProgram:It,setBlending:at,setMaterial:bt,setFlipSided:ht,setCullFace:Rt,setLineWidth:At,setPolygonOffset:Et,setScissorTest:Xt,activeTexture:Gt,bindTexture:T,unbindTexture:S,compressedTexImage2D:q,compressedTexImage3D:it,texImage2D:_t,texImage3D:mt,updateUBOMapping:Ot,uniformBlockBinding:Bt,texStorage2D:k,texStorage3D:pt,texSubImage2D:ot,texSubImage3D:ft,compressedTexSubImage2D:Lt,compressedTexSubImage3D:R,scissor:Mt,viewport:wt,reset:$t}}function tm(a,t,e,n,i,s,r){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const f=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,S){return v?new OffscreenCanvas(T,S):Zi("canvas")}function _(T,S,q,it){let ot=1;if((T.width>it||T.height>it)&&(ot=it/Math.max(T.width,T.height)),ot<1||S===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ft=S?Yr:Math.floor,Lt=ft(ot*T.width),R=ft(ot*T.height);m===void 0&&(m=x(Lt,R));const k=q?x(Lt,R):m;return k.width=Lt,k.height=R,k.getContext("2d").drawImage(T,0,0,Lt,R),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Lt+"x"+R+")."),k}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function w(T){return ea(T.width)&&ea(T.height)}function y(T){return o?!1:T.wrapS!==Ve||T.wrapT!==Ve||T.minFilter!==ye&&T.minFilter!==De}function A(T,S){return T.generateMipmaps&&S&&T.minFilter!==ye&&T.minFilter!==De}function D(T){a.generateMipmap(T)}function b(T,S,q,it,ot=!1){if(o===!1)return S;if(T!==null){if(a[T]!==void 0)return a[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ft=S;return S===6403&&(q===5126&&(ft=33326),q===5131&&(ft=33325),q===5121&&(ft=33321)),S===33319&&(q===5126&&(ft=33328),q===5131&&(ft=33327),q===5121&&(ft=33323)),S===6408&&(q===5126&&(ft=34836),q===5131&&(ft=34842),q===5121&&(ft=it===Zt&&ot===!1?35907:32856),q===32819&&(ft=32854),q===32820&&(ft=32855)),(ft===33325||ft===33326||ft===33327||ft===33328||ft===34842||ft===34836)&&t.get("EXT_color_buffer_float"),ft}function L(T,S,q){return A(T,q)===!0||T.isFramebufferTexture&&T.minFilter!==ye&&T.minFilter!==De?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function I(T){return T===ye||T===Po||T===Js?9728:9729}function U(T){const S=T.target;S.removeEventListener("dispose",U),C(S),S.isVideoTexture&&g.delete(S)}function J(T){const S=T.target;S.removeEventListener("dispose",J),z(S)}function C(T){const S=n.get(T);if(S.__webglInit===void 0)return;const q=T.source,it=f.get(q);if(it){const ot=it[S.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&P(T),Object.keys(it).length===0&&f.delete(q)}n.remove(T)}function P(T){const S=n.get(T);a.deleteTexture(S.__webglTexture);const q=T.source,it=f.get(q);delete it[S.__cacheKey],r.memory.textures--}function z(T){const S=T.texture,q=n.get(T),it=n.get(S);if(it.__webglTexture!==void 0&&(a.deleteTexture(it.__webglTexture),r.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++)a.deleteFramebuffer(q.__webglFramebuffer[ot]),q.__webglDepthbuffer&&a.deleteRenderbuffer(q.__webglDepthbuffer[ot]);else{if(a.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&a.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&a.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let ot=0;ot<q.__webglColorRenderbuffer.length;ot++)q.__webglColorRenderbuffer[ot]&&a.deleteRenderbuffer(q.__webglColorRenderbuffer[ot]);q.__webglDepthRenderbuffer&&a.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ot=0,ft=S.length;ot<ft;ot++){const Lt=n.get(S[ot]);Lt.__webglTexture&&(a.deleteTexture(Lt.__webglTexture),r.memory.textures--),n.remove(S[ot])}n.remove(S),n.remove(T)}let N=0;function Z(){N=0}function G(){const T=N;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),N+=1,T}function X(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.encoding),S.join()}function et(T,S){const q=n.get(T);if(T.isVideoTexture&&Xt(T),T.isRenderTargetTexture===!1&&T.version>0&&q.__version!==T.version){const it=T.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(q,T,S);return}}e.bindTexture(3553,q.__webglTexture,33984+S)}function H(T,S){const q=n.get(T);if(T.version>0&&q.__version!==T.version){yt(q,T,S);return}e.bindTexture(35866,q.__webglTexture,33984+S)}function B(T,S){const q=n.get(T);if(T.version>0&&q.__version!==T.version){yt(q,T,S);return}e.bindTexture(32879,q.__webglTexture,33984+S)}function nt(T,S){const q=n.get(T);if(T.version>0&&q.__version!==T.version){Ct(q,T,S);return}e.bindTexture(34067,q.__webglTexture,33984+S)}const st={[qr]:10497,[Ve]:33071,[Xr]:33648},ct={[ye]:9728,[Po]:9984,[Js]:9986,[De]:9729,[Gc]:9985,[$i]:9987};function $(T,S,q){if(q?(a.texParameteri(T,10242,st[S.wrapS]),a.texParameteri(T,10243,st[S.wrapT]),(T===32879||T===35866)&&a.texParameteri(T,32882,st[S.wrapR]),a.texParameteri(T,10240,ct[S.magFilter]),a.texParameteri(T,10241,ct[S.minFilter])):(a.texParameteri(T,10242,33071),a.texParameteri(T,10243,33071),(T===32879||T===35866)&&a.texParameteri(T,32882,33071),(S.wrapS!==Ve||S.wrapT!==Ve)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(T,10240,I(S.magFilter)),a.texParameteri(T,10241,I(S.minFilter)),S.minFilter!==ye&&S.minFilter!==De&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const it=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===ye||S.minFilter!==Js&&S.minFilter!==$i||S.type===Bn&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===Yi&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(a.texParameterf(T,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Pt(T,S){let q=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",U));const it=S.source;let ot=f.get(it);ot===void 0&&(ot={},f.set(it,ot));const ft=X(S);if(ft!==T.__cacheKey){ot[ft]===void 0&&(ot[ft]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,q=!0),ot[ft].usedTimes++;const Lt=ot[T.__cacheKey];Lt!==void 0&&(ot[T.__cacheKey].usedTimes--,Lt.usedTimes===0&&P(S)),T.__cacheKey=ft,T.__webglTexture=ot[ft].texture}return q}function yt(T,S,q){let it=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(it=35866),S.isData3DTexture&&(it=32879);const ot=Pt(T,S),ft=S.source;e.bindTexture(it,T.__webglTexture,33984+q);const Lt=n.get(ft);if(ft.version!==Lt.__version||ot===!0){e.activeTexture(33984+q),a.pixelStorei(37440,S.flipY),a.pixelStorei(37441,S.premultiplyAlpha),a.pixelStorei(3317,S.unpackAlignment),a.pixelStorei(37443,0);const R=y(S)&&w(S.image)===!1;let k=_(S.image,R,!1,h);k=Gt(S,k);const pt=w(k)||o,_t=s.convert(S.format,S.encoding);let mt=s.convert(S.type),Mt=b(S.internalFormat,_t,mt,S.encoding,S.isVideoTexture);$(it,S,pt);let wt;const Ot=S.mipmaps,Bt=o&&S.isVideoTexture!==!0,$t=Lt.__version===void 0||ot===!0,F=L(S,k,pt);if(S.isDepthTexture)Mt=6402,o?S.type===Bn?Mt=36012:S.type===On?Mt=33190:S.type===_i?Mt=35056:Mt=33189:S.type===Bn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Un&&Mt===6402&&S.type!==_l&&S.type!==On&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=On,mt=s.convert(S.type)),S.format===Mi&&Mt===6402&&(Mt=34041,S.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=_i,mt=s.convert(S.type))),$t&&(Bt?e.texStorage2D(3553,1,Mt,k.width,k.height):e.texImage2D(3553,0,Mt,k.width,k.height,0,_t,mt,null));else if(S.isDataTexture)if(Ot.length>0&&pt){Bt&&$t&&e.texStorage2D(3553,F,Mt,Ot[0].width,Ot[0].height);for(let Y=0,rt=Ot.length;Y<rt;Y++)wt=Ot[Y],Bt?e.texSubImage2D(3553,Y,0,0,wt.width,wt.height,_t,mt,wt.data):e.texImage2D(3553,Y,Mt,wt.width,wt.height,0,_t,mt,wt.data);S.generateMipmaps=!1}else Bt?($t&&e.texStorage2D(3553,F,Mt,k.width,k.height),e.texSubImage2D(3553,0,0,0,k.width,k.height,_t,mt,k.data)):e.texImage2D(3553,0,Mt,k.width,k.height,0,_t,mt,k.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Bt&&$t&&e.texStorage3D(35866,F,Mt,Ot[0].width,Ot[0].height,k.depth);for(let Y=0,rt=Ot.length;Y<rt;Y++)wt=Ot[Y],S.format!==Ge?_t!==null?Bt?e.compressedTexSubImage3D(35866,Y,0,0,0,wt.width,wt.height,k.depth,_t,wt.data,0,0):e.compressedTexImage3D(35866,Y,Mt,wt.width,wt.height,k.depth,0,wt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?e.texSubImage3D(35866,Y,0,0,0,wt.width,wt.height,k.depth,_t,mt,wt.data):e.texImage3D(35866,Y,Mt,wt.width,wt.height,k.depth,0,_t,mt,wt.data)}else{Bt&&$t&&e.texStorage2D(3553,F,Mt,Ot[0].width,Ot[0].height);for(let Y=0,rt=Ot.length;Y<rt;Y++)wt=Ot[Y],S.format!==Ge?_t!==null?Bt?e.compressedTexSubImage2D(3553,Y,0,0,wt.width,wt.height,_t,wt.data):e.compressedTexImage2D(3553,Y,Mt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?e.texSubImage2D(3553,Y,0,0,wt.width,wt.height,_t,mt,wt.data):e.texImage2D(3553,Y,Mt,wt.width,wt.height,0,_t,mt,wt.data)}else if(S.isDataArrayTexture)Bt?($t&&e.texStorage3D(35866,F,Mt,k.width,k.height,k.depth),e.texSubImage3D(35866,0,0,0,0,k.width,k.height,k.depth,_t,mt,k.data)):e.texImage3D(35866,0,Mt,k.width,k.height,k.depth,0,_t,mt,k.data);else if(S.isData3DTexture)Bt?($t&&e.texStorage3D(32879,F,Mt,k.width,k.height,k.depth),e.texSubImage3D(32879,0,0,0,0,k.width,k.height,k.depth,_t,mt,k.data)):e.texImage3D(32879,0,Mt,k.width,k.height,k.depth,0,_t,mt,k.data);else if(S.isFramebufferTexture){if($t)if(Bt)e.texStorage2D(3553,F,Mt,k.width,k.height);else{let Y=k.width,rt=k.height;for(let gt=0;gt<F;gt++)e.texImage2D(3553,gt,Mt,Y,rt,0,_t,mt,null),Y>>=1,rt>>=1}}else if(Ot.length>0&&pt){Bt&&$t&&e.texStorage2D(3553,F,Mt,Ot[0].width,Ot[0].height);for(let Y=0,rt=Ot.length;Y<rt;Y++)wt=Ot[Y],Bt?e.texSubImage2D(3553,Y,0,0,_t,mt,wt):e.texImage2D(3553,Y,Mt,_t,mt,wt);S.generateMipmaps=!1}else Bt?($t&&e.texStorage2D(3553,F,Mt,k.width,k.height),e.texSubImage2D(3553,0,0,0,_t,mt,k)):e.texImage2D(3553,0,Mt,_t,mt,k);A(S,pt)&&D(it),Lt.__version=ft.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Ct(T,S,q){if(S.image.length!==6)return;const it=Pt(T,S),ot=S.source;e.bindTexture(34067,T.__webglTexture,33984+q);const ft=n.get(ot);if(ot.version!==ft.__version||it===!0){e.activeTexture(33984+q),a.pixelStorei(37440,S.flipY),a.pixelStorei(37441,S.premultiplyAlpha),a.pixelStorei(3317,S.unpackAlignment),a.pixelStorei(37443,0);const Lt=S.isCompressedTexture||S.image[0].isCompressedTexture,R=S.image[0]&&S.image[0].isDataTexture,k=[];for(let Y=0;Y<6;Y++)!Lt&&!R?k[Y]=_(S.image[Y],!1,!0,c):k[Y]=R?S.image[Y].image:S.image[Y],k[Y]=Gt(S,k[Y]);const pt=k[0],_t=w(pt)||o,mt=s.convert(S.format,S.encoding),Mt=s.convert(S.type),wt=b(S.internalFormat,mt,Mt,S.encoding),Ot=o&&S.isVideoTexture!==!0,Bt=ft.__version===void 0||it===!0;let $t=L(S,pt,_t);$(34067,S,_t);let F;if(Lt){Ot&&Bt&&e.texStorage2D(34067,$t,wt,pt.width,pt.height);for(let Y=0;Y<6;Y++){F=k[Y].mipmaps;for(let rt=0;rt<F.length;rt++){const gt=F[rt];S.format!==Ge?mt!==null?Ot?e.compressedTexSubImage2D(34069+Y,rt,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(34069+Y,rt,wt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?e.texSubImage2D(34069+Y,rt,0,0,gt.width,gt.height,mt,Mt,gt.data):e.texImage2D(34069+Y,rt,wt,gt.width,gt.height,0,mt,Mt,gt.data)}}}else{F=S.mipmaps,Ot&&Bt&&(F.length>0&&$t++,e.texStorage2D(34067,$t,wt,k[0].width,k[0].height));for(let Y=0;Y<6;Y++)if(R){Ot?e.texSubImage2D(34069+Y,0,0,0,k[Y].width,k[Y].height,mt,Mt,k[Y].data):e.texImage2D(34069+Y,0,wt,k[Y].width,k[Y].height,0,mt,Mt,k[Y].data);for(let rt=0;rt<F.length;rt++){const St=F[rt].image[Y].image;Ot?e.texSubImage2D(34069+Y,rt+1,0,0,St.width,St.height,mt,Mt,St.data):e.texImage2D(34069+Y,rt+1,wt,St.width,St.height,0,mt,Mt,St.data)}}else{Ot?e.texSubImage2D(34069+Y,0,0,0,mt,Mt,k[Y]):e.texImage2D(34069+Y,0,wt,mt,Mt,k[Y]);for(let rt=0;rt<F.length;rt++){const gt=F[rt];Ot?e.texSubImage2D(34069+Y,rt+1,0,0,mt,Mt,gt.image[Y]):e.texImage2D(34069+Y,rt+1,wt,mt,Mt,gt.image[Y])}}}A(S,_t)&&D(34067),ft.__version=ot.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function dt(T,S,q,it,ot){const ft=s.convert(q.format,q.encoding),Lt=s.convert(q.type),R=b(q.internalFormat,ft,Lt,q.encoding);n.get(S).__hasExternalTextures||(ot===32879||ot===35866?e.texImage3D(ot,0,R,S.width,S.height,S.depth,0,ft,Lt,null):e.texImage2D(ot,0,R,S.width,S.height,0,ft,Lt,null)),e.bindFramebuffer(36160,T),Et(S)?u.framebufferTexture2DMultisampleEXT(36160,it,ot,n.get(q).__webglTexture,0,At(S)):(ot===3553||ot>=34069&&ot<=34074)&&a.framebufferTexture2D(36160,it,ot,n.get(q).__webglTexture,0),e.bindFramebuffer(36160,null)}function It(T,S,q){if(a.bindRenderbuffer(36161,T),S.depthBuffer&&!S.stencilBuffer){let it=33189;if(q||Et(S)){const ot=S.depthTexture;ot&&ot.isDepthTexture&&(ot.type===Bn?it=36012:ot.type===On&&(it=33190));const ft=At(S);Et(S)?u.renderbufferStorageMultisampleEXT(36161,ft,it,S.width,S.height):a.renderbufferStorageMultisample(36161,ft,it,S.width,S.height)}else a.renderbufferStorage(36161,it,S.width,S.height);a.framebufferRenderbuffer(36160,36096,36161,T)}else if(S.depthBuffer&&S.stencilBuffer){const it=At(S);q&&Et(S)===!1?a.renderbufferStorageMultisample(36161,it,35056,S.width,S.height):Et(S)?u.renderbufferStorageMultisampleEXT(36161,it,35056,S.width,S.height):a.renderbufferStorage(36161,34041,S.width,S.height),a.framebufferRenderbuffer(36160,33306,36161,T)}else{const it=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ot=0;ot<it.length;ot++){const ft=it[ot],Lt=s.convert(ft.format,ft.encoding),R=s.convert(ft.type),k=b(ft.internalFormat,Lt,R,ft.encoding),pt=At(S);q&&Et(S)===!1?a.renderbufferStorageMultisample(36161,pt,k,S.width,S.height):Et(S)?u.renderbufferStorageMultisampleEXT(36161,pt,k,S.width,S.height):a.renderbufferStorage(36161,k,S.width,S.height)}}a.bindRenderbuffer(36161,null)}function tt(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),et(S.depthTexture,0);const it=n.get(S.depthTexture).__webglTexture,ot=At(S);if(S.depthTexture.format===Un)Et(S)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,it,0,ot):a.framebufferTexture2D(36160,36096,3553,it,0);else if(S.depthTexture.format===Mi)Et(S)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,it,0,ot):a.framebufferTexture2D(36160,33306,3553,it,0);else throw new Error("Unknown depthTexture format")}function Q(T){const S=n.get(T),q=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");tt(S.__webglFramebuffer,T)}else if(q){S.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(36160,S.__webglFramebuffer[it]),S.__webglDepthbuffer[it]=a.createRenderbuffer(),It(S.__webglDepthbuffer[it],T,!1)}else e.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=a.createRenderbuffer(),It(S.__webglDepthbuffer,T,!1);e.bindFramebuffer(36160,null)}function at(T,S,q){const it=n.get(T);S!==void 0&&dt(it.__webglFramebuffer,T,T.texture,36064,3553),q!==void 0&&Q(T)}function bt(T){const S=T.texture,q=n.get(T),it=n.get(S);T.addEventListener("dispose",J),T.isWebGLMultipleRenderTargets!==!0&&(it.__webglTexture===void 0&&(it.__webglTexture=a.createTexture()),it.__version=S.version,r.memory.textures++);const ot=T.isWebGLCubeRenderTarget===!0,ft=T.isWebGLMultipleRenderTargets===!0,Lt=w(T)||o;if(ot){q.__webglFramebuffer=[];for(let R=0;R<6;R++)q.__webglFramebuffer[R]=a.createFramebuffer()}else{if(q.__webglFramebuffer=a.createFramebuffer(),ft)if(i.drawBuffers){const R=T.texture;for(let k=0,pt=R.length;k<pt;k++){const _t=n.get(R[k]);_t.__webglTexture===void 0&&(_t.__webglTexture=a.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&Et(T)===!1){const R=ft?S:[S];q.__webglMultisampledFramebuffer=a.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,q.__webglMultisampledFramebuffer);for(let k=0;k<R.length;k++){const pt=R[k];q.__webglColorRenderbuffer[k]=a.createRenderbuffer(),a.bindRenderbuffer(36161,q.__webglColorRenderbuffer[k]);const _t=s.convert(pt.format,pt.encoding),mt=s.convert(pt.type),Mt=b(pt.internalFormat,_t,mt,pt.encoding,T.isXRRenderTarget===!0),wt=At(T);a.renderbufferStorageMultisample(36161,wt,Mt,T.width,T.height),a.framebufferRenderbuffer(36160,36064+k,36161,q.__webglColorRenderbuffer[k])}a.bindRenderbuffer(36161,null),T.depthBuffer&&(q.__webglDepthRenderbuffer=a.createRenderbuffer(),It(q.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(36160,null)}}if(ot){e.bindTexture(34067,it.__webglTexture),$(34067,S,Lt);for(let R=0;R<6;R++)dt(q.__webglFramebuffer[R],T,S,36064,34069+R);A(S,Lt)&&D(34067),e.unbindTexture()}else if(ft){const R=T.texture;for(let k=0,pt=R.length;k<pt;k++){const _t=R[k],mt=n.get(_t);e.bindTexture(3553,mt.__webglTexture),$(3553,_t,Lt),dt(q.__webglFramebuffer,T,_t,36064+k,3553),A(_t,Lt)&&D(3553)}e.unbindTexture()}else{let R=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?R=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(R,it.__webglTexture),$(R,S,Lt),dt(q.__webglFramebuffer,T,S,36064,R),A(S,Lt)&&D(R),e.unbindTexture()}T.depthBuffer&&Q(T)}function ht(T){const S=w(T)||o,q=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let it=0,ot=q.length;it<ot;it++){const ft=q[it];if(A(ft,S)){const Lt=T.isWebGLCubeRenderTarget?34067:3553,R=n.get(ft).__webglTexture;e.bindTexture(Lt,R),D(Lt),e.unbindTexture()}}}function Rt(T){if(o&&T.samples>0&&Et(T)===!1){const S=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],q=T.width,it=T.height;let ot=16384;const ft=[],Lt=T.stencilBuffer?33306:36096,R=n.get(T),k=T.isWebGLMultipleRenderTargets===!0;if(k)for(let pt=0;pt<S.length;pt++)e.bindFramebuffer(36160,R.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+pt,36161,null),e.bindFramebuffer(36160,R.__webglFramebuffer),a.framebufferTexture2D(36009,36064+pt,3553,null,0);e.bindFramebuffer(36008,R.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,R.__webglFramebuffer);for(let pt=0;pt<S.length;pt++){ft.push(36064+pt),T.depthBuffer&&ft.push(Lt);const _t=R.__ignoreDepthValues!==void 0?R.__ignoreDepthValues:!1;if(_t===!1&&(T.depthBuffer&&(ot|=256),T.stencilBuffer&&(ot|=1024)),k&&a.framebufferRenderbuffer(36008,36064,36161,R.__webglColorRenderbuffer[pt]),_t===!0&&(a.invalidateFramebuffer(36008,[Lt]),a.invalidateFramebuffer(36009,[Lt])),k){const mt=n.get(S[pt]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,mt,0)}a.blitFramebuffer(0,0,q,it,0,0,q,it,ot,9728),p&&a.invalidateFramebuffer(36008,ft)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),k)for(let pt=0;pt<S.length;pt++){e.bindFramebuffer(36160,R.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+pt,36161,R.__webglColorRenderbuffer[pt]);const _t=n.get(S[pt]).__webglTexture;e.bindFramebuffer(36160,R.__webglFramebuffer),a.framebufferTexture2D(36009,36064+pt,3553,_t,0)}e.bindFramebuffer(36009,R.__webglMultisampledFramebuffer)}}function At(T){return Math.min(d,T.samples)}function Et(T){const S=n.get(T);return o&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Xt(T){const S=r.render.frame;g.get(T)!==S&&(g.set(T,S),T.update())}function Gt(T,S){const q=T.encoding,it=T.format,ot=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===$r||q!==Hn&&(q===Zt?o===!1?t.has("EXT_sRGB")===!0&&it===Ge?(T.format=$r,T.minFilter=De,T.generateMipmaps=!1):S=Ml.sRGBToLinear(S):(it!==Ge||ot!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",q)),S}this.allocateTextureUnit=G,this.resetTextureUnits=Z,this.setTexture2D=et,this.setTexture2DArray=H,this.setTexture3D=B,this.setTextureCube=nt,this.rebindTextures=at,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=Et}function em(a,t,e){const n=e.isWebGL2;function i(s,r=null){let o;if(s===Gn)return 5121;if(s===Xc)return 32819;if(s===$c)return 32820;if(s===Hc)return 5120;if(s===Wc)return 5122;if(s===_l)return 5123;if(s===qc)return 5124;if(s===On)return 5125;if(s===Bn)return 5126;if(s===Yi)return n?5131:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Yc)return 6406;if(s===Ge)return 6408;if(s===Zc)return 6409;if(s===Jc)return 6410;if(s===Un)return 6402;if(s===Mi)return 34041;if(s===jc)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===$r)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Kc)return 6403;if(s===Qc)return 36244;if(s===th)return 33319;if(s===eh)return 33320;if(s===nh)return 36249;if(s===Ks||s===Qs||s===tr||s===er)if(r===Zt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ks)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===tr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===er)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ks)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Qs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===tr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===er)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ro||s===Do||s===Io||s===zo)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ro)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Do)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Io)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ih)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===No||s===Fo)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===No)return r===Zt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Fo)return r===Zt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Oo||s===Bo||s===Uo||s===ko||s===Vo||s===Go||s===Ho||s===Wo||s===qo||s===Xo||s===$o||s===Yo||s===jo||s===Zo)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Oo)return r===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Bo)return r===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Uo)return r===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ko)return r===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Vo)return r===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Go)return r===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ho)return r===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Wo)return r===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===qo)return r===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Xo)return r===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===$o)return r===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Yo)return r===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===jo)return r===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Zo)return r===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Jo)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Jo)return r===Zt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===_i?n?34042:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:i}}class nm extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ts extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const im={type:"move"};class Cr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const m of t.hand.values()){const f=e.getJointPose(m,n),v=this._getHandJoint(c,m);f!==null&&(v.matrix.fromArray(f.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=f.radius),v.visible=f!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(im)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ts;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class sm extends we{constructor(t,e,n,i,s,r,o,l,c,h){if(h=h!==void 0?h:Un,h!==Un&&h!==Mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Un&&(n=On),n===void 0&&h===Mi&&(n=_i),super(null,i,s,r,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ye,this.minFilter=l!==void 0?l:ye,this.flipY=!1,this.generateMipmaps=!1}}class rm extends jn{constructor(t,e){super();const n=this;let i=null,s=1,r=null,o="local-floor",l=null,c=null,h=null,d=null,u=null,p=null;const g=e.getContextAttributes();let m=null,f=null;const v=[],x=[],_=new Set,w=new Map,y=new Ie;y.layers.enable(1),y.viewport=new de;const A=new Ie;A.layers.enable(2),A.viewport=new de;const D=[y,A],b=new nm;b.layers.enable(1),b.layers.enable(2);let L=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let B=v[H];return B===void 0&&(B=new Cr,v[H]=B),B.getTargetRaySpace()},this.getControllerGrip=function(H){let B=v[H];return B===void 0&&(B=new Cr,v[H]=B),B.getGripSpace()},this.getHand=function(H){let B=v[H];return B===void 0&&(B=new Cr,v[H]=B),B.getHandSpace()};function U(H){const B=x.indexOf(H.inputSource);if(B===-1)return;const nt=v[B];nt!==void 0&&nt.dispatchEvent({type:H.type,data:H.inputSource})}function J(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",C);for(let H=0;H<v.length;H++){const B=x[H];B!==null&&(x[H]=null,v[H].disconnect(B))}L=null,I=null,t.setRenderTarget(m),u=null,d=null,h=null,i=null,f=null,et.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",J),i.addEventListener("inputsourceschange",C),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const B={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,e,B),i.updateRenderState({baseLayer:u}),f=new Wn(u.framebufferWidth,u.framebufferHeight,{format:Ge,type:Gn,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let B=null,nt=null,st=null;g.depth&&(st=g.stencil?35056:33190,B=g.stencil?Mi:Un,nt=g.stencil?_i:On);const ct={colorFormat:32856,depthFormat:st,scaleFactor:s};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(ct),i.updateRenderState({layers:[d]}),f=new Wn(d.textureWidth,d.textureHeight,{format:Ge,type:Gn,depthTexture:new sm(d.textureWidth,d.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const $=t.properties.get(f);$.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),l=null,r=await i.requestReferenceSpace(o),et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function C(H){for(let B=0;B<H.removed.length;B++){const nt=H.removed[B],st=x.indexOf(nt);st>=0&&(x[st]=null,v[st].disconnect(nt))}for(let B=0;B<H.added.length;B++){const nt=H.added[B];let st=x.indexOf(nt);if(st===-1){for(let $=0;$<v.length;$++)if($>=x.length){x.push(nt),st=$;break}else if(x[$]===null){x[$]=nt,st=$;break}if(st===-1)break}const ct=v[st];ct&&ct.connect(nt)}}const P=new O,z=new O;function N(H,B,nt){P.setFromMatrixPosition(B.matrixWorld),z.setFromMatrixPosition(nt.matrixWorld);const st=P.distanceTo(z),ct=B.projectionMatrix.elements,$=nt.projectionMatrix.elements,Pt=ct[14]/(ct[10]-1),yt=ct[14]/(ct[10]+1),Ct=(ct[9]+1)/ct[5],dt=(ct[9]-1)/ct[5],It=(ct[8]-1)/ct[0],tt=($[8]+1)/$[0],Q=Pt*It,at=Pt*tt,bt=st/(-It+tt),ht=bt*-It;B.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(ht),H.translateZ(bt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const Rt=Pt+bt,At=yt+bt,Et=Q-ht,Xt=at+(st-ht),Gt=Ct*yt/At*Rt,T=dt*yt/At*Rt;H.projectionMatrix.makePerspective(Et,Xt,Gt,T,Rt,At)}function Z(H,B){B===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(B.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;b.near=A.near=y.near=H.near,b.far=A.far=y.far=H.far,(L!==b.near||I!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,I=b.far);const B=H.parent,nt=b.cameras;Z(b,B);for(let ct=0;ct<nt.length;ct++)Z(nt[ct],B);b.matrixWorld.decompose(b.position,b.quaternion,b.scale),H.matrix.copy(b.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);const st=H.children;for(let ct=0,$=st.length;ct<$;ct++)st[ct].updateMatrixWorld(!0);nt.length===2?N(b,y,A):b.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return b},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(u!==null)return u.fixedFoveation},this.setFoveation=function(H){d!==null&&(d.fixedFoveation=H),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=H)},this.getPlanes=function(){return _};let G=null;function X(H,B){if(c=B.getViewerPose(l||r),p=B,c!==null){const nt=c.views;u!==null&&(t.setRenderTargetFramebuffer(f,u.framebuffer),t.setRenderTarget(f));let st=!1;nt.length!==b.cameras.length&&(b.cameras.length=0,st=!0);for(let ct=0;ct<nt.length;ct++){const $=nt[ct];let Pt=null;if(u!==null)Pt=u.getViewport($);else{const Ct=h.getViewSubImage(d,$);Pt=Ct.viewport,ct===0&&(t.setRenderTargetTextures(f,Ct.colorTexture,d.ignoreDepthValues?void 0:Ct.depthStencilTexture),t.setRenderTarget(f))}let yt=D[ct];yt===void 0&&(yt=new Ie,yt.layers.enable(ct),yt.viewport=new de,D[ct]=yt),yt.matrix.fromArray($.transform.matrix),yt.projectionMatrix.fromArray($.projectionMatrix),yt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),ct===0&&b.matrix.copy(yt.matrix),st===!0&&b.cameras.push(yt)}}for(let nt=0;nt<v.length;nt++){const st=x[nt],ct=v[nt];st!==null&&ct!==void 0&&ct.update(st,B,l||r)}if(G&&G(H,B),B.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:B.detectedPlanes});let nt=null;for(const st of _)B.detectedPlanes.has(st)||(nt===null&&(nt=[]),nt.push(st));if(nt!==null)for(const st of nt)_.delete(st),w.delete(st),n.dispatchEvent({type:"planeremoved",data:st});for(const st of B.detectedPlanes)if(!_.has(st))_.add(st),w.set(st,B.lastChangedTime),n.dispatchEvent({type:"planeadded",data:st});else{const ct=w.get(st);st.lastChangedTime>ct&&(w.set(st,st.lastChangedTime),n.dispatchEvent({type:"planechanged",data:st}))}}p=null}const et=new Dl;et.setAnimationLoop(X),this.setAnimationLoop=function(H){G=H},this.dispose=function(){}}}function om(a,t){function e(m,f){f.color.getRGB(m.fogColor.value,Pl(a)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,v,x,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(m,f):f.isMeshToonMaterial?(i(m,f),h(m,f)):f.isMeshPhongMaterial?(i(m,f),c(m,f)):f.isMeshStandardMaterial?(i(m,f),d(m,f),f.isMeshPhysicalMaterial&&u(m,f,_)):f.isMeshMatcapMaterial?(i(m,f),p(m,f)):f.isMeshDepthMaterial?i(m,f):f.isMeshDistanceMaterial?(i(m,f),g(m,f)):f.isMeshNormalMaterial?i(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&r(m,f)):f.isPointsMaterial?o(m,f,v,x):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===Ne&&(m.bumpScale.value*=-1)),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===Ne&&m.normalScale.value.negate()),f.specularMap&&(m.specularMap.value=f.specularMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=t.get(f).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const w=a.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*w}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity);let x;f.map?x=f.map:f.specularMap?x=f.specularMap:f.displacementMap?x=f.displacementMap:f.normalMap?x=f.normalMap:f.bumpMap?x=f.bumpMap:f.roughnessMap?x=f.roughnessMap:f.metalnessMap?x=f.metalnessMap:f.alphaMap?x=f.alphaMap:f.emissiveMap?x=f.emissiveMap:f.clearcoatMap?x=f.clearcoatMap:f.clearcoatNormalMap?x=f.clearcoatNormalMap:f.clearcoatRoughnessMap?x=f.clearcoatRoughnessMap:f.iridescenceMap?x=f.iridescenceMap:f.iridescenceThicknessMap?x=f.iridescenceThicknessMap:f.specularIntensityMap?x=f.specularIntensityMap:f.specularColorMap?x=f.specularColorMap:f.transmissionMap?x=f.transmissionMap:f.thicknessMap?x=f.thicknessMap:f.sheenColorMap?x=f.sheenColorMap:f.sheenRoughnessMap&&(x=f.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix));let _;f.aoMap?_=f.aoMap:f.lightMap&&(_=f.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uv2Transform.value.copy(_.matrix))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity}function r(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function o(m,f,v,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=x*.5,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let v;f.map?v=f.map:f.alphaMap&&(v=f.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.roughness.value=f.roughness,m.metalness.value=f.metalness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function u(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),m.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Ne&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap)}function p(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){m.referencePosition.value.copy(f.referencePosition),m.nearDistance.value=f.nearDistance,m.farDistance.value=f.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function am(a,t,e,n){let i={},s={},r=[];const o=e.isWebGL2?a.getParameter(35375):0;function l(x,_){const w=_.program;n.uniformBlockBinding(x,w)}function c(x,_){let w=i[x.id];w===void 0&&(g(x),w=h(x),i[x.id]=w,x.addEventListener("dispose",f));const y=_.program;n.updateUBOMapping(x,y);const A=t.render.frame;s[x.id]!==A&&(u(x),s[x.id]=A)}function h(x){const _=d();x.__bindingPointIndex=_;const w=a.createBuffer(),y=x.__size,A=x.usage;return a.bindBuffer(35345,w),a.bufferData(35345,y,A),a.bindBuffer(35345,null),a.bindBufferBase(35345,_,w),w}function d(){for(let x=0;x<o;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const _=i[x.id],w=x.uniforms,y=x.__cache;a.bindBuffer(35345,_);for(let A=0,D=w.length;A<D;A++){const b=w[A];if(p(b,A,y)===!0){const L=b.__offset,I=Array.isArray(b.value)?b.value:[b.value];let U=0;for(let J=0;J<I.length;J++){const C=I[J],P=m(C);typeof C=="number"?(b.__data[0]=C,a.bufferSubData(35345,L+U,b.__data)):C.isMatrix3?(b.__data[0]=C.elements[0],b.__data[1]=C.elements[1],b.__data[2]=C.elements[2],b.__data[3]=C.elements[0],b.__data[4]=C.elements[3],b.__data[5]=C.elements[4],b.__data[6]=C.elements[5],b.__data[7]=C.elements[0],b.__data[8]=C.elements[6],b.__data[9]=C.elements[7],b.__data[10]=C.elements[8],b.__data[11]=C.elements[0]):(C.toArray(b.__data,U),U+=P.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,L,b.__data)}}a.bindBuffer(35345,null)}function p(x,_,w){const y=x.value;if(w[_]===void 0){if(typeof y=="number")w[_]=y;else{const A=Array.isArray(y)?y:[y],D=[];for(let b=0;b<A.length;b++)D.push(A[b].clone());w[_]=D}return!0}else if(typeof y=="number"){if(w[_]!==y)return w[_]=y,!0}else{const A=Array.isArray(w[_])?w[_]:[w[_]],D=Array.isArray(y)?y:[y];for(let b=0;b<A.length;b++){const L=A[b];if(L.equals(D[b])===!1)return L.copy(D[b]),!0}}return!1}function g(x){const _=x.uniforms;let w=0;const y=16;let A=0;for(let D=0,b=_.length;D<b;D++){const L=_[D],I={boundary:0,storage:0},U=Array.isArray(L.value)?L.value:[L.value];for(let J=0,C=U.length;J<C;J++){const P=U[J],z=m(P);I.boundary+=z.boundary,I.storage+=z.storage}if(L.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,D>0){A=w%y;const J=y-A;A!==0&&J-I.boundary<0&&(w+=y-A,L.__offset=w)}w+=I.storage}return A=w%y,A>0&&(w+=y-A),x.__size=w,x.__cache={},this}function m(x){const _={boundary:0,storage:0};return typeof x=="number"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function f(x){const _=x.target;_.removeEventListener("dispose",f);const w=r.indexOf(_.__bindingPointIndex);r.splice(w,1),a.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function v(){for(const x in i)a.deleteBuffer(i[x]);r=[],i={},s={}}return{bind:l,update:c,dispose:v}}function lm(){const a=Zi("canvas");return a.style.display="block",a}function Bl(a={}){this.isWebGLRenderer=!0;const t=a.canvas!==void 0?a.canvas:lm(),e=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,s=a.antialias!==void 0?a.antialias:!1,r=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,o=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",c=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let h;e!==null?h=e.getContextAttributes().alpha:h=a.alpha!==void 0?a.alpha:!1;let d=null,u=null;const p=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Hn,this.physicallyCorrectLights=!1,this.toneMapping=pn,this.toneMappingExposure=1;const m=this;let f=!1,v=0,x=0,_=null,w=-1,y=null;const A=new de,D=new de;let b=null,L=t.width,I=t.height,U=1,J=null,C=null;const P=new de(0,0,L,I),z=new de(0,0,L,I);let N=!1;const Z=new so;let G=!1,X=!1,et=null;const H=new se,B=new lt,nt=new O,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ct(){return _===null?U:1}let $=e;function Pt(E,W){for(let j=0;j<E.length;j++){const V=E[j],K=t.getContext(V,W);if(K!==null)return K}return null}try{const E={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:r,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${to}`),t.addEventListener("webglcontextlost",Mt,!1),t.addEventListener("webglcontextrestored",wt,!1),t.addEventListener("webglcontextcreationerror",Ot,!1),$===null){const W=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&W.shift(),$=Pt(W,E),$===null)throw Pt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let yt,Ct,dt,It,tt,Q,at,bt,ht,Rt,At,Et,Xt,Gt,T,S,q,it,ot,ft,Lt,R,k,pt;function _t(){yt=new _f($),Ct=new ff($,yt,a),yt.init(Ct),R=new em($,yt,Ct),dt=new Qp($,yt,Ct),It=new wf,tt=new Up,Q=new tm($,yt,dt,tt,Ct,R,It),at=new mf(m),bt=new xf(m),ht=new Ph($,Ct),k=new uf($,yt,ht,Ct),Rt=new yf($,ht,It,k),At=new Af($,Rt,ht,It),ot=new Ef($,Ct,Q),S=new pf(tt),Et=new Bp(m,at,bt,yt,Ct,k,S),Xt=new om(m,tt),Gt=new Vp,T=new $p(yt,Ct),it=new hf(m,at,bt,dt,At,h,r),q=new Kp(m,At,Ct),pt=new am($,It,Ct,dt),ft=new df($,yt,It,Ct),Lt=new bf($,yt,It,Ct),It.programs=Et.programs,m.capabilities=Ct,m.extensions=yt,m.properties=tt,m.renderLists=Gt,m.shadowMap=q,m.state=dt,m.info=It}_t();const mt=new rm(m,$);this.xr=mt,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const E=yt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=yt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(E){E!==void 0&&(U=E,this.setSize(L,I,!1))},this.getSize=function(E){return E.set(L,I)},this.setSize=function(E,W,j){if(mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=E,I=W,t.width=Math.floor(E*U),t.height=Math.floor(W*U),j!==!1&&(t.style.width=E+"px",t.style.height=W+"px"),this.setViewport(0,0,E,W)},this.getDrawingBufferSize=function(E){return E.set(L*U,I*U).floor()},this.setDrawingBufferSize=function(E,W,j){L=E,I=W,U=j,t.width=Math.floor(E*j),t.height=Math.floor(W*j),this.setViewport(0,0,E,W)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(P)},this.setViewport=function(E,W,j,V){E.isVector4?P.set(E.x,E.y,E.z,E.w):P.set(E,W,j,V),dt.viewport(A.copy(P).multiplyScalar(U).floor())},this.getScissor=function(E){return E.copy(z)},this.setScissor=function(E,W,j,V){E.isVector4?z.set(E.x,E.y,E.z,E.w):z.set(E,W,j,V),dt.scissor(D.copy(z).multiplyScalar(U).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(E){dt.setScissorTest(N=E)},this.setOpaqueSort=function(E){J=E},this.setTransparentSort=function(E){C=E},this.getClearColor=function(E){return E.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(E=!0,W=!0,j=!0){let V=0;E&&(V|=16384),W&&(V|=256),j&&(V|=1024),$.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Mt,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",Ot,!1),Gt.dispose(),T.dispose(),tt.dispose(),at.dispose(),bt.dispose(),At.dispose(),k.dispose(),pt.dispose(),Et.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",gt),mt.removeEventListener("sessionend",St),et&&(et.dispose(),et=null),qt.stop()};function Mt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const E=It.autoReset,W=q.enabled,j=q.autoUpdate,V=q.needsUpdate,K=q.type;_t(),It.autoReset=E,q.enabled=W,q.autoUpdate=j,q.needsUpdate=V,q.type=K}function Ot(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Bt(E){const W=E.target;W.removeEventListener("dispose",Bt),$t(W)}function $t(E){F(E),tt.remove(E)}function F(E){const W=tt.get(E).programs;W!==void 0&&(W.forEach(function(j){Et.releaseProgram(j)}),E.isShaderMaterial&&Et.releaseShaderCache(E))}this.renderBufferDirect=function(E,W,j,V,K,Tt){W===null&&(W=st);const Dt=K.isMesh&&K.matrixWorld.determinant()<0,Nt=hc(E,W,j,V,K);dt.setMaterial(V,Dt);let Ft=j.index,Ht=1;V.wireframe===!0&&(Ft=Rt.getWireframeAttribute(j),Ht=2);const Ut=j.drawRange,kt=j.attributes.position;let Qt=Ut.start*Ht,Me=(Ut.start+Ut.count)*Ht;Tt!==null&&(Qt=Math.max(Qt,Tt.start*Ht),Me=Math.min(Me,(Tt.start+Tt.count)*Ht)),Ft!==null?(Qt=Math.max(Qt,0),Me=Math.min(Me,Ft.count)):kt!=null&&(Qt=Math.max(Qt,0),Me=Math.min(Me,kt.count));const en=Me-Qt;if(en<0||en===1/0)return;k.setup(K,V,Nt,j,Ft);let An,te=ft;if(Ft!==null&&(An=ht.get(Ft),te=Lt,te.setIndex(An)),K.isMesh)V.wireframe===!0?(dt.setLineWidth(V.wireframeLinewidth*ct()),te.setMode(1)):te.setMode(4);else if(K.isLine){let Vt=V.linewidth;Vt===void 0&&(Vt=1),dt.setLineWidth(Vt*ct()),K.isLineSegments?te.setMode(1):K.isLineLoop?te.setMode(2):te.setMode(3)}else K.isPoints?te.setMode(0):K.isSprite&&te.setMode(4);if(K.isInstancedMesh)te.renderInstances(Qt,en,K.count);else if(j.isInstancedBufferGeometry){const Vt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,$s=Math.min(j.instanceCount,Vt);te.renderInstances(Qt,en,$s)}else te.render(Qt,en)},this.compile=function(E,W){function j(V,K,Tt){V.transparent===!0&&V.side===as?(V.side=Ne,V.needsUpdate=!0,Pe(V,K,Tt),V.side=Vn,V.needsUpdate=!0,Pe(V,K,Tt),V.side=as):Pe(V,K,Tt)}u=T.get(E),u.init(),g.push(u),E.traverseVisible(function(V){V.isLight&&V.layers.test(W.layers)&&(u.pushLight(V),V.castShadow&&u.pushShadow(V))}),u.setupLights(m.physicallyCorrectLights),E.traverse(function(V){const K=V.material;if(K)if(Array.isArray(K))for(let Tt=0;Tt<K.length;Tt++){const Dt=K[Tt];j(Dt,E,V)}else j(K,E,V)}),g.pop(),u=null};let Y=null;function rt(E){Y&&Y(E)}function gt(){qt.stop()}function St(){qt.start()}const qt=new Dl;qt.setAnimationLoop(rt),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(E){Y=E,mt.setAnimationLoop(E),E===null?qt.stop():qt.start()},mt.addEventListener("sessionstart",gt),mt.addEventListener("sessionend",St),this.render=function(E,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(W),W=mt.getCamera()),E.isScene===!0&&E.onBeforeRender(m,E,W,_),u=T.get(E,g.length),u.init(),g.push(u),H.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Z.setFromProjectionMatrix(H),X=this.localClippingEnabled,G=S.init(this.clippingPlanes,X,W),d=Gt.get(E,p.length),d.init(),p.push(d),ce(E,W,0,m.sortObjects),d.finish(),m.sortObjects===!0&&d.sort(J,C),G===!0&&S.beginShadows();const j=u.state.shadowsArray;if(q.render(j,E,W),G===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),it.render(d,E),u.setupLights(m.physicallyCorrectLights),W.isArrayCamera){const V=W.cameras;for(let K=0,Tt=V.length;K<Tt;K++){const Dt=V[K];fe(d,E,Dt,Dt.viewport)}}else fe(d,E,W);_!==null&&(Q.updateMultisampleRenderTarget(_),Q.updateRenderTargetMipmap(_)),E.isScene===!0&&E.onAfterRender(m,E,W),k.resetDefaultState(),w=-1,y=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,p.pop(),p.length>0?d=p[p.length-1]:d=null};function ce(E,W,j,V){if(E.visible===!1)return;if(E.layers.test(W.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(W);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Z.intersectsSprite(E)){V&&nt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(H);const Dt=At.update(E),Nt=E.material;Nt.visible&&d.push(E,Dt,Nt,j,nt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==It.render.frame&&(E.skeleton.update(),E.skeleton.frame=It.render.frame),!E.frustumCulled||Z.intersectsObject(E))){V&&nt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(H);const Dt=At.update(E),Nt=E.material;if(Array.isArray(Nt)){const Ft=Dt.groups;for(let Ht=0,Ut=Ft.length;Ht<Ut;Ht++){const kt=Ft[Ht],Qt=Nt[kt.materialIndex];Qt&&Qt.visible&&d.push(E,Dt,Qt,j,nt.z,kt)}}else Nt.visible&&d.push(E,Dt,Nt,j,nt.z,null)}}const Tt=E.children;for(let Dt=0,Nt=Tt.length;Dt<Nt;Dt++)ce(Tt[Dt],W,j,V)}function fe(E,W,j,V){const K=E.opaque,Tt=E.transmissive,Dt=E.transparent;u.setupLightsView(j),Tt.length>0&&En(K,W,j),V&&dt.viewport(A.copy(V)),K.length>0&&Jt(K,W,j),Tt.length>0&&Jt(Tt,W,j),Dt.length>0&&Jt(Dt,W,j),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function En(E,W,j){const V=Ct.isWebGL2;et===null&&(et=new Wn(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")?Yi:Gn,minFilter:$i,samples:V&&s===!0?4:0})),m.getDrawingBufferSize(B),V?et.setSize(B.x,B.y):et.setSize(Yr(B.x),Yr(B.y));const K=m.getRenderTarget();m.setRenderTarget(et),m.clear();const Tt=m.toneMapping;m.toneMapping=pn,Jt(E,W,j),m.toneMapping=Tt,Q.updateMultisampleRenderTarget(et),Q.updateRenderTargetMipmap(et),m.setRenderTarget(K)}function Jt(E,W,j){const V=W.isScene===!0?W.overrideMaterial:null;for(let K=0,Tt=E.length;K<Tt;K++){const Dt=E[K],Nt=Dt.object,Ft=Dt.geometry,Ht=V===null?Dt.material:V,Ut=Dt.group;Nt.layers.test(j.layers)&&tn(Nt,W,j,Ft,Ht,Ut)}}function tn(E,W,j,V,K,Tt){E.onBeforeRender(m,W,j,V,K,Tt),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),K.onBeforeRender(m,W,j,V,E,Tt),K.transparent===!0&&K.side===as?(K.side=Ne,K.needsUpdate=!0,m.renderBufferDirect(j,W,V,K,E,Tt),K.side=Vn,K.needsUpdate=!0,m.renderBufferDirect(j,W,V,K,E,Tt),K.side=as):m.renderBufferDirect(j,W,V,K,E,Tt),E.onAfterRender(m,W,j,V,K,Tt)}function Pe(E,W,j){W.isScene!==!0&&(W=st);const V=tt.get(E),K=u.state.lights,Tt=u.state.shadowsArray,Dt=K.state.version,Nt=Et.getParameters(E,K.state,Tt,W,j),Ft=Et.getProgramCacheKey(Nt);let Ht=V.programs;V.environment=E.isMeshStandardMaterial?W.environment:null,V.fog=W.fog,V.envMap=(E.isMeshStandardMaterial?bt:at).get(E.envMap||V.environment),Ht===void 0&&(E.addEventListener("dispose",Bt),Ht=new Map,V.programs=Ht);let Ut=Ht.get(Ft);if(Ut!==void 0){if(V.currentProgram===Ut&&V.lightsStateVersion===Dt)return bo(E,Nt),Ut}else Nt.uniforms=Et.getUniforms(E),E.onBuild(j,Nt,m),E.onBeforeCompile(Nt,m),Ut=Et.acquireProgram(Nt,Ft),Ht.set(Ft,Ut),V.uniforms=Nt.uniforms;const kt=V.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(kt.clippingPlanes=S.uniform),bo(E,Nt),V.needsLights=dc(E),V.lightsStateVersion=Dt,V.needsLights&&(kt.ambientLightColor.value=K.state.ambient,kt.lightProbe.value=K.state.probe,kt.directionalLights.value=K.state.directional,kt.directionalLightShadows.value=K.state.directionalShadow,kt.spotLights.value=K.state.spot,kt.spotLightShadows.value=K.state.spotShadow,kt.rectAreaLights.value=K.state.rectArea,kt.ltc_1.value=K.state.rectAreaLTC1,kt.ltc_2.value=K.state.rectAreaLTC2,kt.pointLights.value=K.state.point,kt.pointLightShadows.value=K.state.pointShadow,kt.hemisphereLights.value=K.state.hemi,kt.directionalShadowMap.value=K.state.directionalShadowMap,kt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,kt.spotShadowMap.value=K.state.spotShadowMap,kt.spotLightMatrix.value=K.state.spotLightMatrix,kt.spotLightMap.value=K.state.spotLightMap,kt.pointShadowMap.value=K.state.pointShadowMap,kt.pointShadowMatrix.value=K.state.pointShadowMatrix);const Qt=Ut.getUniforms(),Me=Os.seqWithValue(Qt.seq,kt);return V.currentProgram=Ut,V.uniformsList=Me,Ut}function bo(E,W){const j=tt.get(E);j.outputEncoding=W.outputEncoding,j.instancing=W.instancing,j.skinning=W.skinning,j.morphTargets=W.morphTargets,j.morphNormals=W.morphNormals,j.morphColors=W.morphColors,j.morphTargetsCount=W.morphTargetsCount,j.numClippingPlanes=W.numClippingPlanes,j.numIntersection=W.numClipIntersection,j.vertexAlphas=W.vertexAlphas,j.vertexTangents=W.vertexTangents,j.toneMapping=W.toneMapping}function hc(E,W,j,V,K){W.isScene!==!0&&(W=st),Q.resetTextureUnits();const Tt=W.fog,Dt=V.isMeshStandardMaterial?W.environment:null,Nt=_===null?m.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:Hn,Ft=(V.isMeshStandardMaterial?bt:at).get(V.envMap||Dt),Ht=V.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ut=!!V.normalMap&&!!j.attributes.tangent,kt=!!j.morphAttributes.position,Qt=!!j.morphAttributes.normal,Me=!!j.morphAttributes.color,en=V.toneMapped?m.toneMapping:pn,An=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,te=An!==void 0?An.length:0,Vt=tt.get(V),$s=u.state.lights;if(G===!0&&(X===!0||E!==y)){const Se=E===y&&V.id===w;S.setState(V,E,Se)}let he=!1;V.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==$s.state.version||Vt.outputEncoding!==Nt||K.isInstancedMesh&&Vt.instancing===!1||!K.isInstancedMesh&&Vt.instancing===!0||K.isSkinnedMesh&&Vt.skinning===!1||!K.isSkinnedMesh&&Vt.skinning===!0||Vt.envMap!==Ft||V.fog===!0&&Vt.fog!==Tt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==S.numPlanes||Vt.numIntersection!==S.numIntersection)||Vt.vertexAlphas!==Ht||Vt.vertexTangents!==Ut||Vt.morphTargets!==kt||Vt.morphNormals!==Qt||Vt.morphColors!==Me||Vt.toneMapping!==en||Ct.isWebGL2===!0&&Vt.morphTargetsCount!==te)&&(he=!0):(he=!0,Vt.__version=V.version);let Tn=Vt.currentProgram;he===!0&&(Tn=Pe(V,W,K));let wo=!1,Li=!1,Ys=!1;const ve=Tn.getUniforms(),Cn=Vt.uniforms;if(dt.useProgram(Tn.program)&&(wo=!0,Li=!0,Ys=!0),V.id!==w&&(w=V.id,Li=!0),wo||y!==E){if(ve.setValue($,"projectionMatrix",E.projectionMatrix),Ct.logarithmicDepthBuffer&&ve.setValue($,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),y!==E&&(y=E,Li=!0,Ys=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const Se=ve.map.cameraPosition;Se!==void 0&&Se.setValue($,nt.setFromMatrixPosition(E.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ve.setValue($,"isOrthographic",E.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||K.isSkinnedMesh)&&ve.setValue($,"viewMatrix",E.matrixWorldInverse)}if(K.isSkinnedMesh){ve.setOptional($,K,"bindMatrix"),ve.setOptional($,K,"bindMatrixInverse");const Se=K.skeleton;Se&&(Ct.floatVertexTextures?(Se.boneTexture===null&&Se.computeBoneTexture(),ve.setValue($,"boneTexture",Se.boneTexture,Q),ve.setValue($,"boneTextureSize",Se.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const js=j.morphAttributes;if((js.position!==void 0||js.normal!==void 0||js.color!==void 0&&Ct.isWebGL2===!0)&&ot.update(K,j,V,Tn),(Li||Vt.receiveShadow!==K.receiveShadow)&&(Vt.receiveShadow=K.receiveShadow,ve.setValue($,"receiveShadow",K.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Cn.envMap.value=Ft,Cn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),Li&&(ve.setValue($,"toneMappingExposure",m.toneMappingExposure),Vt.needsLights&&uc(Cn,Ys),Tt&&V.fog===!0&&Xt.refreshFogUniforms(Cn,Tt),Xt.refreshMaterialUniforms(Cn,V,U,I,et),Os.upload($,Vt.uniformsList,Cn,Q)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Os.upload($,Vt.uniformsList,Cn,Q),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ve.setValue($,"center",K.center),ve.setValue($,"modelViewMatrix",K.modelViewMatrix),ve.setValue($,"normalMatrix",K.normalMatrix),ve.setValue($,"modelMatrix",K.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Se=V.uniformsGroups;for(let Zs=0,fc=Se.length;Zs<fc;Zs++)if(Ct.isWebGL2){const Mo=Se[Zs];pt.update(Mo,Tn),pt.bind(Mo,Tn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Tn}function uc(E,W){E.ambientLightColor.needsUpdate=W,E.lightProbe.needsUpdate=W,E.directionalLights.needsUpdate=W,E.directionalLightShadows.needsUpdate=W,E.pointLights.needsUpdate=W,E.pointLightShadows.needsUpdate=W,E.spotLights.needsUpdate=W,E.spotLightShadows.needsUpdate=W,E.rectAreaLights.needsUpdate=W,E.hemisphereLights.needsUpdate=W}function dc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(E,W,j){tt.get(E.texture).__webglTexture=W,tt.get(E.depthTexture).__webglTexture=j;const V=tt.get(E);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=j===void 0,V.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,W){const j=tt.get(E);j.__webglFramebuffer=W,j.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(E,W=0,j=0){_=E,v=W,x=j;let V=!0,K=null,Tt=!1,Dt=!1;if(E){const Ft=tt.get(E);Ft.__useDefaultFramebuffer!==void 0?(dt.bindFramebuffer(36160,null),V=!1):Ft.__webglFramebuffer===void 0?Q.setupRenderTarget(E):Ft.__hasExternalTextures&&Q.rebindTextures(E,tt.get(E.texture).__webglTexture,tt.get(E.depthTexture).__webglTexture);const Ht=E.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Dt=!0);const Ut=tt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(K=Ut[W],Tt=!0):Ct.isWebGL2&&E.samples>0&&Q.useMultisampledRTT(E)===!1?K=tt.get(E).__webglMultisampledFramebuffer:K=Ut,A.copy(E.viewport),D.copy(E.scissor),b=E.scissorTest}else A.copy(P).multiplyScalar(U).floor(),D.copy(z).multiplyScalar(U).floor(),b=N;if(dt.bindFramebuffer(36160,K)&&Ct.drawBuffers&&V&&dt.drawBuffers(E,K),dt.viewport(A),dt.scissor(D),dt.setScissorTest(b),Tt){const Ft=tt.get(E.texture);$.framebufferTexture2D(36160,36064,34069+W,Ft.__webglTexture,j)}else if(Dt){const Ft=tt.get(E.texture),Ht=W||0;$.framebufferTextureLayer(36160,36064,Ft.__webglTexture,j||0,Ht)}w=-1},this.readRenderTargetPixels=function(E,W,j,V,K,Tt,Dt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=tt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Dt!==void 0&&(Nt=Nt[Dt]),Nt){dt.bindFramebuffer(36160,Nt);try{const Ft=E.texture,Ht=Ft.format,Ut=Ft.type;if(Ht!==Ge&&R.convert(Ht)!==$.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const kt=Ut===Yi&&(yt.has("EXT_color_buffer_half_float")||Ct.isWebGL2&&yt.has("EXT_color_buffer_float"));if(Ut!==Gn&&R.convert(Ut)!==$.getParameter(35738)&&!(Ut===Bn&&(Ct.isWebGL2||yt.has("OES_texture_float")||yt.has("WEBGL_color_buffer_float")))&&!kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=E.width-V&&j>=0&&j<=E.height-K&&$.readPixels(W,j,V,K,R.convert(Ht),R.convert(Ut),Tt)}finally{const Ft=_!==null?tt.get(_).__webglFramebuffer:null;dt.bindFramebuffer(36160,Ft)}}},this.copyFramebufferToTexture=function(E,W,j=0){const V=Math.pow(2,-j),K=Math.floor(W.image.width*V),Tt=Math.floor(W.image.height*V);Q.setTexture2D(W,0),$.copyTexSubImage2D(3553,j,0,0,E.x,E.y,K,Tt),dt.unbindTexture()},this.copyTextureToTexture=function(E,W,j,V=0){const K=W.image.width,Tt=W.image.height,Dt=R.convert(j.format),Nt=R.convert(j.type);Q.setTexture2D(j,0),$.pixelStorei(37440,j.flipY),$.pixelStorei(37441,j.premultiplyAlpha),$.pixelStorei(3317,j.unpackAlignment),W.isDataTexture?$.texSubImage2D(3553,V,E.x,E.y,K,Tt,Dt,Nt,W.image.data):W.isCompressedTexture?$.compressedTexSubImage2D(3553,V,E.x,E.y,W.mipmaps[0].width,W.mipmaps[0].height,Dt,W.mipmaps[0].data):$.texSubImage2D(3553,V,E.x,E.y,Dt,Nt,W.image),V===0&&j.generateMipmaps&&$.generateMipmap(3553),dt.unbindTexture()},this.copyTextureToTexture3D=function(E,W,j,V,K=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Tt=E.max.x-E.min.x+1,Dt=E.max.y-E.min.y+1,Nt=E.max.z-E.min.z+1,Ft=R.convert(V.format),Ht=R.convert(V.type);let Ut;if(V.isData3DTexture)Q.setTexture3D(V,0),Ut=32879;else if(V.isDataArrayTexture)Q.setTexture2DArray(V,0),Ut=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei(37440,V.flipY),$.pixelStorei(37441,V.premultiplyAlpha),$.pixelStorei(3317,V.unpackAlignment);const kt=$.getParameter(3314),Qt=$.getParameter(32878),Me=$.getParameter(3316),en=$.getParameter(3315),An=$.getParameter(32877),te=j.isCompressedTexture?j.mipmaps[0]:j.image;$.pixelStorei(3314,te.width),$.pixelStorei(32878,te.height),$.pixelStorei(3316,E.min.x),$.pixelStorei(3315,E.min.y),$.pixelStorei(32877,E.min.z),j.isDataTexture||j.isData3DTexture?$.texSubImage3D(Ut,K,W.x,W.y,W.z,Tt,Dt,Nt,Ft,Ht,te.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(Ut,K,W.x,W.y,W.z,Tt,Dt,Nt,Ft,te.data)):$.texSubImage3D(Ut,K,W.x,W.y,W.z,Tt,Dt,Nt,Ft,Ht,te),$.pixelStorei(3314,kt),$.pixelStorei(32878,Qt),$.pixelStorei(3316,Me),$.pixelStorei(3315,en),$.pixelStorei(32877,An),K===0&&V.generateMipmaps&&$.generateMipmap(Ut),dt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Q.setTextureCube(E,0):E.isData3DTexture?Q.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Q.setTexture2DArray(E,0):Q.setTexture2D(E,0),dt.unbindTexture()},this.resetState=function(){v=0,x=0,_=null,dt.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class cm extends Bl{}cm.prototype.isWebGL1Renderer=!0;class hm extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Qe{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let r;e?r=e:r=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-r,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(s-1);const h=n[i],u=n[i+1]-h,p=(r-h)/u;return(i+p)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),o=this.getPoint(s),l=e||(r.isVector2?new lt:new O);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new O,i=[],s=[],r=[],o=new O,l=new se;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new O)}s[0]=new O,r[0]=new O;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),r[0].crossVectors(i[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),r[p]=r[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(me(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}r[p].crossVectors(i[p],s[p])}if(e===!0){let p=Math.acos(me(s[0].dot(s[t]),-1,1));p/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),r[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class oo extends Qe{constructor(t=0,e=0,n=1,i=1,s=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,e){const n=e||new lt,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class um extends oo{constructor(t,e,n,i,s,r){super(t,e,n,n,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function ao(){let a=0,t=0,e=0,n=0;function i(s,r,o,l){a=s,t=o,e=-3*s+3*r-2*o-l,n=2*s-2*r+o+l}return{initCatmullRom:function(s,r,o,l,c){i(r,o,c*(o-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,o,l,c,h,d){let u=(r-s)/c-(o-s)/(c+h)+(o-r)/h,p=(o-r)/h-(l-r)/(h+d)+(l-o)/d;u*=h,p*=h,i(r,o,u,p)},calc:function(s){const r=s*s,o=r*s;return a+t*s+e*r+n*o}}}const Cs=new O,Lr=new ao,Pr=new ao,Rr=new ao;class dm extends Qe{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new O){const n=e,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(Cs.subVectors(i[0],i[1]).add(i[0]),c=Cs);const d=i[o%s],u=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Cs.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Cs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p),f=Math.pow(u.distanceToSquared(h),p);m<1e-4&&(m=1),g<1e-4&&(g=m),f<1e-4&&(f=m),Lr.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,m,f),Pr.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,m,f),Rr.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,m,f)}else this.curveType==="catmullrom"&&(Lr.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Pr.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Rr.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Lr.calc(l),Pr.calc(l),Rr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new O().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function za(a,t,e,n,i){const s=(n-t)*.5,r=(i-e)*.5,o=a*a,l=a*o;return(2*e-2*n+s+r)*l+(-3*e+3*n-2*s-r)*o+s*a+e}function fm(a,t){const e=1-a;return e*e*t}function pm(a,t){return 2*(1-a)*a*t}function mm(a,t){return a*a*t}function Hi(a,t,e,n){return fm(a,t)+pm(a,e)+mm(a,n)}function gm(a,t){const e=1-a;return e*e*e*t}function vm(a,t){const e=1-a;return 3*e*e*a*t}function xm(a,t){return 3*(1-a)*a*a*t}function _m(a,t){return a*a*a*t}function Wi(a,t,e,n,i){return gm(a,t)+vm(a,e)+xm(a,n)+_m(a,i)}class Ul extends Qe{constructor(t=new lt,e=new lt,n=new lt,i=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new lt){const n=e,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(Wi(t,i.x,s.x,r.x,o.x),Wi(t,i.y,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Zr extends Qe{constructor(t=new O,e=new O,n=new O,i=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new O){const n=e,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(Wi(t,i.x,s.x,r.x,o.x),Wi(t,i.y,s.y,r.y,o.y),Wi(t,i.z,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class lo extends Qe{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const n=e||new lt;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ym extends Qe{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kl extends Qe{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){const n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(Hi(t,i.x,s.x,r.x),Hi(t,i.y,s.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bm extends Qe{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){const n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(Hi(t,i.x,s.x,r.x),Hi(t,i.y,s.y,r.y),Hi(t,i.z,s.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vl extends Qe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const n=e,i=this.points,s=(i.length-1)*t,r=Math.floor(s),o=s-r,l=i[r===0?r:r-1],c=i[r],h=i[r>i.length-2?i.length-1:r+1],d=i[r>i.length-3?i.length-1:r+2];return n.set(za(o,l.x,c.x,h.x,d.x),za(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new lt().fromArray(i))}return this}}var Gl=Object.freeze({__proto__:null,ArcCurve:um,CatmullRomCurve3:dm,CubicBezierCurve:Ul,CubicBezierCurve3:Zr,EllipseCurve:oo,LineCurve:lo,LineCurve3:ym,QuadraticBezierCurve:kl,QuadraticBezierCurve3:bm,SplineCurve:Vl});class Hl extends Qe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new lo(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const r=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const r=s[i],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Gl[i.type]().fromJSON(i))}return this}}class Na extends Hl{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new lo(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new kl(this.currentPoint.clone(),new lt(t,e),new lt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,r){const o=new Ul(this.currentPoint.clone(),new lt(t,e),new lt(n,i),new lt(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Vl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,s,r),this}absarc(t,e,n,i,s,r){return this.absellipse(t,e,n,n,i,s,r),this}ellipse(t,e,n,i,s,r,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,r,o,l),this}absellipse(t,e,n,i,s,r,o,l){const c=new oo(t,e,n,i,s,r,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}let Wl=class extends Na{constructor(t){super(t),this.uuid=Ai(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Na().fromJSON(i))}return this}};const wm={triangulate:function(a,t,e=2){const n=t&&t.length,i=n?t[0]*e:a.length;let s=ql(a,0,i,e,!0);const r=[];if(!s||s.next===s.prev)return r;let o,l,c,h,d,u,p;if(n&&(s=Tm(a,t,s,e)),a.length>80*e){o=c=a[0],l=h=a[1];for(let g=e;g<i;g+=e)d=a[g],u=a[g+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Ji(s,r,e,o,l,p,0),r}};function ql(a,t,e,n,i){let s,r;if(i===Bm(a,t,e,n)>0)for(s=t;s<e;s+=n)r=Fa(s,a[s],a[s+1],r);else for(s=e-n;s>=t;s-=n)r=Fa(s,a[s],a[s+1],r);return r&&Hs(r,r.next)&&(Qi(r),r=r.next),r}function $n(a,t){if(!a)return a;t||(t=a);let e=a,n;do if(n=!1,!e.steiner&&(Hs(e,e.next)||Kt(e.prev,e,e.next)===0)){if(Qi(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ji(a,t,e,n,i,s,r){if(!a)return;!r&&s&&Dm(a,n,i,s);let o=a,l,c;for(;a.prev!==a.next;){if(l=a.prev,c=a.next,s?Sm(a,n,i,s):Mm(a)){t.push(l.i/e|0),t.push(a.i/e|0),t.push(c.i/e|0),Qi(a),a=c.next,o=c.next;continue}if(a=c,a===o){r?r===1?(a=Em($n(a),t,e),Ji(a,t,e,n,i,s,2)):r===2&&Am(a,t,e,n,i,s):Ji($n(a),t,e,n,i,s,1);break}}}function Mm(a){const t=a.prev,e=a,n=a.next;if(Kt(t,e,n)>=0)return!1;const i=t.x,s=e.x,r=n.x,o=t.y,l=e.y,c=n.y,h=i<s?i<r?i:r:s<r?s:r,d=o<l?o<c?o:c:l<c?l:c,u=i>s?i>r?i:r:s>r?s:r,p=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=p&&gi(i,o,s,l,r,c,g.x,g.y)&&Kt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Sm(a,t,e,n){const i=a.prev,s=a,r=a.next;if(Kt(i,s,r)>=0)return!1;const o=i.x,l=s.x,c=r.x,h=i.y,d=s.y,u=r.y,p=o<l?o<c?o:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,m=o>l?o>c?o:c:l>c?l:c,f=h>d?h>u?h:u:d>u?d:u,v=Jr(p,g,t,e,n),x=Jr(m,f,t,e,n);let _=a.prevZ,w=a.nextZ;for(;_&&_.z>=v&&w&&w.z<=x;){if(_.x>=p&&_.x<=m&&_.y>=g&&_.y<=f&&_!==i&&_!==r&&gi(o,h,l,d,c,u,_.x,_.y)&&Kt(_.prev,_,_.next)>=0||(_=_.prevZ,w.x>=p&&w.x<=m&&w.y>=g&&w.y<=f&&w!==i&&w!==r&&gi(o,h,l,d,c,u,w.x,w.y)&&Kt(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;_&&_.z>=v;){if(_.x>=p&&_.x<=m&&_.y>=g&&_.y<=f&&_!==i&&_!==r&&gi(o,h,l,d,c,u,_.x,_.y)&&Kt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;w&&w.z<=x;){if(w.x>=p&&w.x<=m&&w.y>=g&&w.y<=f&&w!==i&&w!==r&&gi(o,h,l,d,c,u,w.x,w.y)&&Kt(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function Em(a,t,e){let n=a;do{const i=n.prev,s=n.next.next;!Hs(i,s)&&Xl(i,n,n.next,s)&&Ki(i,s)&&Ki(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Qi(n),Qi(n.next),n=a=s),n=n.next}while(n!==a);return $n(n)}function Am(a,t,e,n,i,s){let r=a;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&Nm(r,o)){let l=$l(r,o);r=$n(r,r.next),l=$n(l,l.next),Ji(r,t,e,n,i,s,0),Ji(l,t,e,n,i,s,0);return}o=o.next}r=r.next}while(r!==a)}function Tm(a,t,e,n){const i=[];let s,r,o,l,c;for(s=0,r=t.length;s<r;s++)o=t[s]*n,l=s<r-1?t[s+1]*n:a.length,c=ql(a,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(zm(c));for(i.sort(Cm),s=0;s<i.length;s++)e=Lm(i[s],e);return e}function Cm(a,t){return a.x-t.x}function Lm(a,t){const e=Pm(a,t);if(!e)return t;const n=$l(e,a);return $n(n,n.next),$n(e,e.next)}function Pm(a,t){let e=t,n=-1/0,i;const s=a.x,r=a.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=s&&u>n&&(n=u,i=e.x<e.next.x?e:e.next,u===s))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,d;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&gi(r<c?s:n,r,l,c,r<c?n:s,r,e.x,e.y)&&(d=Math.abs(r-e.y)/(s-e.x),Ki(e,a)&&(d<h||d===h&&(e.x>i.x||e.x===i.x&&Rm(i,e)))&&(i=e,h=d)),e=e.next;while(e!==o);return i}function Rm(a,t){return Kt(a.prev,a,t.prev)<0&&Kt(t.next,a,a.next)<0}function Dm(a,t,e,n){let i=a;do i.z===0&&(i.z=Jr(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==a);i.prevZ.nextZ=null,i.prevZ=null,Im(i)}function Im(a){let t,e,n,i,s,r,o,l,c=1;do{for(e=a,a=null,s=null,r=0;e;){for(r++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:a=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(r>1);return a}function Jr(a,t,e,n,i){return a=(a-e)*i|0,t=(t-n)*i|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,a|t<<1}function zm(a){let t=a,e=a;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==a);return e}function gi(a,t,e,n,i,s,r,o){return(i-r)*(t-o)>=(a-r)*(s-o)&&(a-r)*(n-o)>=(e-r)*(t-o)&&(e-r)*(s-o)>=(i-r)*(n-o)}function Nm(a,t){return a.next.i!==t.i&&a.prev.i!==t.i&&!Fm(a,t)&&(Ki(a,t)&&Ki(t,a)&&Om(a,t)&&(Kt(a.prev,a,t.prev)||Kt(a,t.prev,t))||Hs(a,t)&&Kt(a.prev,a,a.next)>0&&Kt(t.prev,t,t.next)>0)}function Kt(a,t,e){return(t.y-a.y)*(e.x-t.x)-(t.x-a.x)*(e.y-t.y)}function Hs(a,t){return a.x===t.x&&a.y===t.y}function Xl(a,t,e,n){const i=Ps(Kt(a,t,e)),s=Ps(Kt(a,t,n)),r=Ps(Kt(e,n,a)),o=Ps(Kt(e,n,t));return!!(i!==s&&r!==o||i===0&&Ls(a,e,t)||s===0&&Ls(a,n,t)||r===0&&Ls(e,a,n)||o===0&&Ls(e,t,n))}function Ls(a,t,e){return t.x<=Math.max(a.x,e.x)&&t.x>=Math.min(a.x,e.x)&&t.y<=Math.max(a.y,e.y)&&t.y>=Math.min(a.y,e.y)}function Ps(a){return a>0?1:a<0?-1:0}function Fm(a,t){let e=a;do{if(e.i!==a.i&&e.next.i!==a.i&&e.i!==t.i&&e.next.i!==t.i&&Xl(e,e.next,a,t))return!0;e=e.next}while(e!==a);return!1}function Ki(a,t){return Kt(a.prev,a,a.next)<0?Kt(a,t,a.next)>=0&&Kt(a,a.prev,t)>=0:Kt(a,t,a.prev)<0||Kt(a,a.next,t)<0}function Om(a,t){let e=a,n=!1;const i=(a.x+t.x)/2,s=(a.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==a);return n}function $l(a,t){const e=new Kr(a.i,a.x,a.y),n=new Kr(t.i,t.x,t.y),i=a.next,s=t.prev;return a.next=t,t.prev=a,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Fa(a,t,e,n){const i=new Kr(a,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Qi(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function Kr(a,t,e){this.i=a,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Bm(a,t,e,n){let i=0;for(let s=t,r=e-n;s<e;s+=n)i+=(a[r]-a[s])*(a[s+1]+a[r+1]),r=s;return i}class qi{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return qi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];Oa(t),Ba(n,t);let r=t.length;e.forEach(Oa);for(let l=0;l<e.length;l++)i.push(r),r+=e[l].length,Ba(n,e[l]);const o=wm.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Oa(a){const t=a.length;t>2&&a[t-1].equals(a[0])&&a.pop()}function Ba(a,t){for(let e=0;e<t.length;e++)a.push(t[e].x),a.push(t[e].y)}class co extends mn{constructor(t=new Wl([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];r(c)}this.setAttribute("position",new Fe(i,3)),this.setAttribute("uv",new Fe(s,2)),this.computeVertexNormals();function r(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,m=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3;const v=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:Um;let _,w=!1,y,A,D,b;v&&(_=v.getSpacedPoints(h),w=!0,u=!1,y=v.computeFrenetFrames(h,!1),A=new O,D=new O,b=new O),u||(f=0,p=0,g=0,m=0);const L=o.extractPoints(c);let I=L.shape;const U=L.holes;if(!qi.isClockWise(I)){I=I.reverse();for(let tt=0,Q=U.length;tt<Q;tt++){const at=U[tt];qi.isClockWise(at)&&(U[tt]=at.reverse())}}const C=qi.triangulateShape(I,U),P=I;for(let tt=0,Q=U.length;tt<Q;tt++){const at=U[tt];I=I.concat(at)}function z(tt,Q,at){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().multiplyScalar(at).add(tt)}const N=I.length,Z=C.length;function G(tt,Q,at){let bt,ht,Rt;const At=tt.x-Q.x,Et=tt.y-Q.y,Xt=at.x-tt.x,Gt=at.y-tt.y,T=At*At+Et*Et,S=At*Gt-Et*Xt;if(Math.abs(S)>Number.EPSILON){const q=Math.sqrt(T),it=Math.sqrt(Xt*Xt+Gt*Gt),ot=Q.x-Et/q,ft=Q.y+At/q,Lt=at.x-Gt/it,R=at.y+Xt/it,k=((Lt-ot)*Gt-(R-ft)*Xt)/(At*Gt-Et*Xt);bt=ot+At*k-tt.x,ht=ft+Et*k-tt.y;const pt=bt*bt+ht*ht;if(pt<=2)return new lt(bt,ht);Rt=Math.sqrt(pt/2)}else{let q=!1;At>Number.EPSILON?Xt>Number.EPSILON&&(q=!0):At<-Number.EPSILON?Xt<-Number.EPSILON&&(q=!0):Math.sign(Et)===Math.sign(Gt)&&(q=!0),q?(bt=-Et,ht=At,Rt=Math.sqrt(T)):(bt=At,ht=Et,Rt=Math.sqrt(T/2))}return new lt(bt/Rt,ht/Rt)}const X=[];for(let tt=0,Q=P.length,at=Q-1,bt=tt+1;tt<Q;tt++,at++,bt++)at===Q&&(at=0),bt===Q&&(bt=0),X[tt]=G(P[tt],P[at],P[bt]);const et=[];let H,B=X.concat();for(let tt=0,Q=U.length;tt<Q;tt++){const at=U[tt];H=[];for(let bt=0,ht=at.length,Rt=ht-1,At=bt+1;bt<ht;bt++,Rt++,At++)Rt===ht&&(Rt=0),At===ht&&(At=0),H[bt]=G(at[bt],at[Rt],at[At]);et.push(H),B=B.concat(H)}for(let tt=0;tt<f;tt++){const Q=tt/f,at=p*Math.cos(Q*Math.PI/2),bt=g*Math.sin(Q*Math.PI/2)+m;for(let ht=0,Rt=P.length;ht<Rt;ht++){const At=z(P[ht],X[ht],bt);Pt(At.x,At.y,-at)}for(let ht=0,Rt=U.length;ht<Rt;ht++){const At=U[ht];H=et[ht];for(let Et=0,Xt=At.length;Et<Xt;Et++){const Gt=z(At[Et],H[Et],bt);Pt(Gt.x,Gt.y,-at)}}}const nt=g+m;for(let tt=0;tt<N;tt++){const Q=u?z(I[tt],B[tt],nt):I[tt];w?(D.copy(y.normals[0]).multiplyScalar(Q.x),A.copy(y.binormals[0]).multiplyScalar(Q.y),b.copy(_[0]).add(D).add(A),Pt(b.x,b.y,b.z)):Pt(Q.x,Q.y,0)}for(let tt=1;tt<=h;tt++)for(let Q=0;Q<N;Q++){const at=u?z(I[Q],B[Q],nt):I[Q];w?(D.copy(y.normals[tt]).multiplyScalar(at.x),A.copy(y.binormals[tt]).multiplyScalar(at.y),b.copy(_[tt]).add(D).add(A),Pt(b.x,b.y,b.z)):Pt(at.x,at.y,d/h*tt)}for(let tt=f-1;tt>=0;tt--){const Q=tt/f,at=p*Math.cos(Q*Math.PI/2),bt=g*Math.sin(Q*Math.PI/2)+m;for(let ht=0,Rt=P.length;ht<Rt;ht++){const At=z(P[ht],X[ht],bt);Pt(At.x,At.y,d+at)}for(let ht=0,Rt=U.length;ht<Rt;ht++){const At=U[ht];H=et[ht];for(let Et=0,Xt=At.length;Et<Xt;Et++){const Gt=z(At[Et],H[Et],bt);w?Pt(Gt.x,Gt.y+_[h-1].y,_[h-1].x+at):Pt(Gt.x,Gt.y,d+at)}}}st(),ct();function st(){const tt=i.length/3;if(u){let Q=0,at=N*Q;for(let bt=0;bt<Z;bt++){const ht=C[bt];yt(ht[2]+at,ht[1]+at,ht[0]+at)}Q=h+f*2,at=N*Q;for(let bt=0;bt<Z;bt++){const ht=C[bt];yt(ht[0]+at,ht[1]+at,ht[2]+at)}}else{for(let Q=0;Q<Z;Q++){const at=C[Q];yt(at[2],at[1],at[0])}for(let Q=0;Q<Z;Q++){const at=C[Q];yt(at[0]+N*h,at[1]+N*h,at[2]+N*h)}}n.addGroup(tt,i.length/3-tt,0)}function ct(){const tt=i.length/3;let Q=0;$(P,Q),Q+=P.length;for(let at=0,bt=U.length;at<bt;at++){const ht=U[at];$(ht,Q),Q+=ht.length}n.addGroup(tt,i.length/3-tt,1)}function $(tt,Q){let at=tt.length;for(;--at>=0;){const bt=at;let ht=at-1;ht<0&&(ht=tt.length-1);for(let Rt=0,At=h+f*2;Rt<At;Rt++){const Et=N*Rt,Xt=N*(Rt+1),Gt=Q+bt+Et,T=Q+ht+Et,S=Q+ht+Xt,q=Q+bt+Xt;Ct(Gt,T,S,q)}}}function Pt(tt,Q,at){l.push(tt),l.push(Q),l.push(at)}function yt(tt,Q,at){dt(tt),dt(Q),dt(at);const bt=i.length/3,ht=x.generateTopUV(n,i,bt-3,bt-2,bt-1);It(ht[0]),It(ht[1]),It(ht[2])}function Ct(tt,Q,at,bt){dt(tt),dt(Q),dt(bt),dt(Q),dt(at),dt(bt);const ht=i.length/3,Rt=x.generateSideWallUV(n,i,ht-6,ht-3,ht-2,ht-1);It(Rt[0]),It(Rt[1]),It(Rt[3]),It(Rt[1]),It(Rt[2]),It(Rt[3])}function dt(tt){i.push(l[tt*3+0]),i.push(l[tt*3+1]),i.push(l[tt*3+2])}function It(tt){s.push(tt.x),s.push(tt.y)}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return km(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Gl[i.type]().fromJSON(i)),new co(n,t.options)}}const Um={generateTopUV:function(a,t,e,n,i){const s=t[e*3],r=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new lt(s,r),new lt(o,l),new lt(c,h)]},generateSideWallUV:function(a,t,e,n,i,s){const r=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],p=t[i*3+1],g=t[i*3+2],m=t[s*3],f=t[s*3+1],v=t[s*3+2];return Math.abs(o-h)<Math.abs(r-c)?[new lt(r,1-l),new lt(c,1-d),new lt(u,1-g),new lt(m,1-v)]:[new lt(o,1-l),new lt(h,1-d),new lt(p,1-g),new lt(f,1-v)]}};function km(a,t,e){if(e.shapes=[],Array.isArray(a))for(let n=0,i=a.length;n<i;n++){const s=a[n];e.shapes.push(s.uuid)}else e.shapes.push(a.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ho extends mn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],d=new O,u=new O,p=[],g=[],m=[],f=[];for(let v=0;v<=n;v++){const x=[],_=v/n;let w=0;v==0&&r==0?w=.5/e:v==n&&l==Math.PI&&(w=-.5/e);for(let y=0;y<=e;y++){const A=y/e;d.x=-t*Math.cos(i+A*s)*Math.sin(r+_*o),d.y=t*Math.cos(r+_*o),d.z=t*Math.sin(i+A*s)*Math.sin(r+_*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),m.push(u.x,u.y,u.z),f.push(A+w,1-_),x.push(c++)}h.push(x)}for(let v=0;v<n;v++)for(let x=0;x<e;x++){const _=h[v][x+1],w=h[v][x],y=h[v+1][x],A=h[v+1][x+1];(v!==0||r>0)&&p.push(_,w,A),(v!==n-1||l<Math.PI)&&p.push(w,y,A)}this.setIndex(p),this.setAttribute("position",new Fe(g,3)),this.setAttribute("normal",new Fe(m,3)),this.setAttribute("uv",new Fe(f,2))}static fromJSON(t){return new ho(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class uo extends is{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yl,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Ua={enabled:!1,files:{},add:function(a,t){this.enabled!==!1&&(this.files[a]=t)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class Vm{constructor(t,e,n){const i=this;let s=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Gm=new Vm;class fo{constructor(t){this.manager=t!==void 0?t:Gm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class Yl extends fo{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=Ua.get(t);if(r!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r;const o=Zi("img");function l(){h(),Ua.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(d){h(),i&&i(d),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class Hm extends fo{constructor(t){super(t)}load(t,e,n,i){const s=new io,r=new Yl(this.manager);r.setCrossOrigin(this.crossOrigin),r.setPath(this.path);let o=0;function l(c){r.load(t[c],function(h){s.images[c]=h,o++,o===6&&(s.needsUpdate=!0,e&&e(s))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return s}}class Wm extends fo{constructor(t){super(t)}load(t,e,n,i){const s=new we,r=new Yl(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class jl extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Dr=new se,ka=new O,Va=new O;class qm{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new so,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ka.setFromMatrixPosition(t.matrixWorld),e.position.copy(ka),Va.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Va),e.updateMatrixWorld(),Dr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Dr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Xm extends qm{constructor(){super(new Il(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $m extends jl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DefaultUp),this.updateMatrix(),this.target=new ge,this.shadow=new Xm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ym extends jl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class jm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ga(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ga();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ga(){return(typeof performance>"u"?Date:performance).now()}class Ha{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Zm extends co{constructor(t,e){console.warn("THREE.ExtrudeBufferGeometry has been renamed to THREE.ExtrudeGeometry."),super(t,e)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:to}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=to);const Wa={type:"change"},Ir={type:"start"},qa={type:"end"};class Jm extends jn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zn.ROTATE,MIDDLE:Zn.DOLLY,RIGHT:Zn.PAN},this.touches={ONE:Jn.ROTATE,TWO:Jn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",Gt),this._domElementKeyEvents=R},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Wa),n.update(),s=i.NONE},this.update=function(){const R=new O,k=new qn().setFromUnitVectors(t.up,new O(0,1,0)),pt=k.clone().invert(),_t=new O,mt=new qn,Mt=2*Math.PI;return function(){const Ot=n.object.position;R.copy(Ot).sub(n.target),R.applyQuaternion(k),o.setFromVector3(R),n.autoRotate&&s===i.NONE&&L(D()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Bt=n.minAzimuthAngle,$t=n.maxAzimuthAngle;return isFinite(Bt)&&isFinite($t)&&(Bt<-Math.PI?Bt+=Mt:Bt>Math.PI&&(Bt-=Mt),$t<-Math.PI?$t+=Mt:$t>Math.PI&&($t-=Mt),Bt<=$t?o.theta=Math.max(Bt,Math.min($t,o.theta)):o.theta=o.theta>(Bt+$t)/2?Math.max(Bt,o.theta):Math.min($t,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),R.setFromSpherical(o),R.applyQuaternion(pt),Ot.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,d||_t.distanceToSquared(n.object.position)>r||8*(1-mt.dot(n.object.quaternion))>r?(n.dispatchEvent(Wa),_t.copy(n.object.position),mt.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",q),n.domElement.removeEventListener("pointerdown",at),n.domElement.removeEventListener("pointercancel",Rt),n.domElement.removeEventListener("wheel",Xt),n.domElement.removeEventListener("pointermove",bt),n.domElement.removeEventListener("pointerup",ht),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Gt)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const r=1e-6,o=new Ha,l=new Ha;let c=1;const h=new O;let d=!1;const u=new lt,p=new lt,g=new lt,m=new lt,f=new lt,v=new lt,x=new lt,_=new lt,w=new lt,y=[],A={};function D(){return 2*Math.PI/60/60*n.autoRotateSpeed}function b(){return Math.pow(.95,n.zoomSpeed)}function L(R){l.theta-=R}function I(R){l.phi-=R}const U=function(){const R=new O;return function(pt,_t){R.setFromMatrixColumn(_t,0),R.multiplyScalar(-pt),h.add(R)}}(),J=function(){const R=new O;return function(pt,_t){n.screenSpacePanning===!0?R.setFromMatrixColumn(_t,1):(R.setFromMatrixColumn(_t,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(pt),h.add(R)}}(),C=function(){const R=new O;return function(pt,_t){const mt=n.domElement;if(n.object.isPerspectiveCamera){const Mt=n.object.position;R.copy(Mt).sub(n.target);let wt=R.length();wt*=Math.tan(n.object.fov/2*Math.PI/180),U(2*pt*wt/mt.clientHeight,n.object.matrix),J(2*_t*wt/mt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(pt*(n.object.right-n.object.left)/n.object.zoom/mt.clientWidth,n.object.matrix),J(_t*(n.object.top-n.object.bottom)/n.object.zoom/mt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function P(R){n.object.isPerspectiveCamera?c/=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*R)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(R){n.object.isPerspectiveCamera?c*=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/R)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(R){u.set(R.clientX,R.clientY)}function Z(R){x.set(R.clientX,R.clientY)}function G(R){m.set(R.clientX,R.clientY)}function X(R){p.set(R.clientX,R.clientY),g.subVectors(p,u).multiplyScalar(n.rotateSpeed);const k=n.domElement;L(2*Math.PI*g.x/k.clientHeight),I(2*Math.PI*g.y/k.clientHeight),u.copy(p),n.update()}function et(R){_.set(R.clientX,R.clientY),w.subVectors(_,x),w.y>0?P(b()):w.y<0&&z(b()),x.copy(_),n.update()}function H(R){f.set(R.clientX,R.clientY),v.subVectors(f,m).multiplyScalar(n.panSpeed),C(v.x,v.y),m.copy(f),n.update()}function B(R){R.deltaY<0?z(b()):R.deltaY>0&&P(b()),n.update()}function nt(R){let k=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(0,n.keyPanSpeed),k=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(0,-n.keyPanSpeed),k=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(n.keyPanSpeed,0),k=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(-n.keyPanSpeed,0),k=!0;break}k&&(R.preventDefault(),n.update())}function st(){if(y.length===1)u.set(y[0].pageX,y[0].pageY);else{const R=.5*(y[0].pageX+y[1].pageX),k=.5*(y[0].pageY+y[1].pageY);u.set(R,k)}}function ct(){if(y.length===1)m.set(y[0].pageX,y[0].pageY);else{const R=.5*(y[0].pageX+y[1].pageX),k=.5*(y[0].pageY+y[1].pageY);m.set(R,k)}}function $(){const R=y[0].pageX-y[1].pageX,k=y[0].pageY-y[1].pageY,pt=Math.sqrt(R*R+k*k);x.set(0,pt)}function Pt(){n.enableZoom&&$(),n.enablePan&&ct()}function yt(){n.enableZoom&&$(),n.enableRotate&&st()}function Ct(R){if(y.length==1)p.set(R.pageX,R.pageY);else{const pt=Lt(R),_t=.5*(R.pageX+pt.x),mt=.5*(R.pageY+pt.y);p.set(_t,mt)}g.subVectors(p,u).multiplyScalar(n.rotateSpeed);const k=n.domElement;L(2*Math.PI*g.x/k.clientHeight),I(2*Math.PI*g.y/k.clientHeight),u.copy(p)}function dt(R){if(y.length===1)f.set(R.pageX,R.pageY);else{const k=Lt(R),pt=.5*(R.pageX+k.x),_t=.5*(R.pageY+k.y);f.set(pt,_t)}v.subVectors(f,m).multiplyScalar(n.panSpeed),C(v.x,v.y),m.copy(f)}function It(R){const k=Lt(R),pt=R.pageX-k.x,_t=R.pageY-k.y,mt=Math.sqrt(pt*pt+_t*_t);_.set(0,mt),w.set(0,Math.pow(_.y/x.y,n.zoomSpeed)),P(w.y),x.copy(_)}function tt(R){n.enableZoom&&It(R),n.enablePan&&dt(R)}function Q(R){n.enableZoom&&It(R),n.enableRotate&&Ct(R)}function at(R){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",bt),n.domElement.addEventListener("pointerup",ht)),it(R),R.pointerType==="touch"?T(R):At(R))}function bt(R){n.enabled!==!1&&(R.pointerType==="touch"?S(R):Et(R))}function ht(R){ot(R),y.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",bt),n.domElement.removeEventListener("pointerup",ht)),n.dispatchEvent(qa),s=i.NONE}function Rt(R){ot(R)}function At(R){let k;switch(R.button){case 0:k=n.mouseButtons.LEFT;break;case 1:k=n.mouseButtons.MIDDLE;break;case 2:k=n.mouseButtons.RIGHT;break;default:k=-1}switch(k){case Zn.DOLLY:if(n.enableZoom===!1)return;Z(R),s=i.DOLLY;break;case Zn.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;G(R),s=i.PAN}else{if(n.enableRotate===!1)return;N(R),s=i.ROTATE}break;case Zn.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;N(R),s=i.ROTATE}else{if(n.enablePan===!1)return;G(R),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ir)}function Et(R){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;X(R);break;case i.DOLLY:if(n.enableZoom===!1)return;et(R);break;case i.PAN:if(n.enablePan===!1)return;H(R);break}}function Xt(R){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(R.preventDefault(),n.dispatchEvent(Ir),B(R),n.dispatchEvent(qa))}function Gt(R){n.enabled===!1||n.enablePan===!1||nt(R)}function T(R){switch(ft(R),y.length){case 1:switch(n.touches.ONE){case Jn.ROTATE:if(n.enableRotate===!1)return;st(),s=i.TOUCH_ROTATE;break;case Jn.PAN:if(n.enablePan===!1)return;ct(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Jn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Pt(),s=i.TOUCH_DOLLY_PAN;break;case Jn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;yt(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ir)}function S(R){switch(ft(R),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ct(R),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;dt(R),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;tt(R),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Q(R),n.update();break;default:s=i.NONE}}function q(R){n.enabled!==!1&&R.preventDefault()}function it(R){y.push(R)}function ot(R){delete A[R.pointerId];for(let k=0;k<y.length;k++)if(y[k].pointerId==R.pointerId){y.splice(k,1);return}}function ft(R){let k=A[R.pointerId];k===void 0&&(k=new lt,A[R.pointerId]=k),k.set(R.pageX,R.pageY)}function Lt(R){const k=R.pointerId===y[0].pointerId?y[1]:y[0];return A[k.pointerId]}n.domElement.addEventListener("contextmenu",q),n.domElement.addEventListener("pointerdown",at),n.domElement.addEventListener("pointercancel",Rt),n.domElement.addEventListener("wheel",Xt,{passive:!1}),this.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class Je{constructor(t,e,n,i,s="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),Je.nextNameID=Je.nextNameID||0,this.$name.id=`lil-gui-name-${++Je.nextNameID}`,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Km extends Je{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Qr(a){let t,e;return(t=a.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=a.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=a.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const Qm={isPrimitive:!0,match:a=>typeof a=="string",fromHexString:Qr,toHexString:Qr},ts={isPrimitive:!0,match:a=>typeof a=="number",fromHexString:a=>parseInt(a.substring(1),16),toHexString:a=>"#"+a.toString(16).padStart(6,0)},tg={isPrimitive:!1,match:Array.isArray,fromHexString(a,t,e=1){const n=ts.fromHexString(a);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([a,t,e],n=1){n=255/n;const i=a*n<<16^t*n<<8^e*n<<0;return ts.toHexString(i)}},eg={isPrimitive:!1,match:a=>Object(a)===a,fromHexString(a,t,e=1){const n=ts.fromHexString(a);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:a,g:t,b:e},n=1){n=255/n;const i=a*n<<16^t*n<<8^e*n<<0;return ts.toHexString(i)}},ng=[Qm,ts,tg,eg];function ig(a){return ng.find(t=>t.match(a))}class sg extends Je{constructor(t,e,n,i){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=ig(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Qr(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class zr extends Je{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class rg extends Je{constructor(t,e,n,i,s,r){super(t,e,n,"number"),this._initInput(),this.min(i),this.max(s);const o=r!==void 0;this.step(o?r:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},e=v=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+v),this.$input.value=this.getValue())},n=v=>{v.code==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),e(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),e(this._step*this._arrowKeyMultiplier(v)*-1))},i=v=>{this._inputFocused&&(v.preventDefault(),e(this._step*this._normalizeMouseWheel(v)))};let s=!1,r,o,l,c,h;const d=5,u=v=>{r=v.clientX,o=l=v.clientY,s=!0,c=this.getValue(),h=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",g)},p=v=>{if(s){const x=v.clientX-r,_=v.clientY-o;Math.abs(_)>d?(v.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>d&&g()}if(!s){const x=v.clientY-l;h-=x*this._step*this._arrowKeyMultiplier(v),c+h>this._max?h=this._max-c:c+h<this._min&&(h=this._min-c),this._snapClampSetValue(c+h)}l=v.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",g)},m=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",i,{passive:!1}),this.$input.addEventListener("mousedown",u),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(v,x,_,w,y)=>(v-x)/(_-x)*(y-w)+w,e=v=>{const x=this.$slider.getBoundingClientRect();let _=t(v,x.left,x.right,this._min,this._max);this._snapClampSetValue(_)},n=v=>{this._setDraggingStyle(!0),e(v.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=v=>{e(v.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let r=!1,o,l;const c=v=>{v.preventDefault(),this._setDraggingStyle(!0),e(v.touches[0].clientX),r=!1},h=v=>{v.touches.length>1||(this._hasScrollBar?(o=v.touches[0].clientX,l=v.touches[0].clientY,r=!0):c(v),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",u))},d=v=>{if(r){const x=v.touches[0].clientX-o,_=v.touches[0].clientY-l;Math.abs(x)>Math.abs(_)?c(v):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u))}else v.preventDefault(),e(v.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u)},p=this._callOnFinishChange.bind(this),g=400;let m;const f=v=>{if(Math.abs(v.deltaX)<Math.abs(v.deltaY)&&this._hasScrollBar)return;v.preventDefault();const _=this._normalizeMouseWheel(v)*this._step;this._snapClampSetValue(this.getValue()+_),this.$input.value=this.getValue(),clearTimeout(m),m=setTimeout(p,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",f,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class og extends Je{constructor(t,e,n,i){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(s=>{const r=document.createElement("option");r.innerHTML=s,this.$select.appendChild(r)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class ag extends Je{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const lg=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function cg(a){const t=document.createElement("style");t.innerHTML=a;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Xa=!1;class po{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:i,title:s="Controls",injectStyles:r=!0,touchStyles:o=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),o&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!Xa&&r&&(cg(lg),Xa=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(t,e,n,i,s){if(Object(n)===n)return new og(this,t,e,n);const r=t[e];switch(typeof r){case"number":return new rg(this,t,e,n,i,s);case"boolean":return new Km(this,t,e);case"string":return new ag(this,t,e);case"function":return new zr(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,r)}addColor(t,e,n=1){return new sg(this,t,e,n)}addFolder(t){return new po({parent:this,title:t})}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof zr||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof zr)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}class He{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new M);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new M);const n=this.elements,i=t.x,s=t.y,r=t.z;return e.x=n[0]*i+n[1]*s+n[2]*r,e.y=n[3]*i+n[4]*s+n[5]*r,e.z=n[6]*i+n[7]*s+n[8]*r,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new He);const n=this.elements,i=t.elements,s=e.elements,r=n[0],o=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],p=n[7],g=n[8],m=i[0],f=i[1],v=i[2],x=i[3],_=i[4],w=i[5],y=i[6],A=i[7],D=i[8];return s[0]=r*m+o*x+l*y,s[1]=r*f+o*_+l*A,s[2]=r*v+o*w+l*D,s[3]=c*m+h*x+d*y,s[4]=c*f+h*_+d*A,s[5]=c*v+h*w+d*D,s[6]=u*m+p*x+g*y,s[7]=u*f+p*_+g*A,s[8]=u*v+p*w+g*D,e}scale(t,e){e===void 0&&(e=new He);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new M);const n=3,i=4,s=[];let r,o;for(r=0;r<n*i;r++)s.push(0);for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+i*o]=this.elements[r+3*o];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let l=3;const c=l;let h;const d=4;let u;do{if(r=c-l,s[r+i*r]===0){for(o=r+1;o<c;o++)if(s[r+i*o]!==0){h=d;do u=d-h,s[u+i*r]+=s[u+i*o];while(--h);break}}if(s[r+i*r]!==0)for(o=r+1;o<c;o++){const p=s[r+i*o]/s[r+i*r];h=d;do u=d-h,s[u+i*o]=u<=r?0:s[u+i*o]-s[u+i*r]*p;while(--h)}}while(--l);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new He);const e=3,n=6,i=hg;let s,r;for(s=0;s<3;s++)for(r=0;r<3;r++)i[s+n*r]=this.elements[s+3*r];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let o=3;const l=o;let c;const h=n;let d;do{if(s=l-o,i[s+n*s]===0){for(r=s+1;r<l;r++)if(i[s+n*r]!==0){c=h;do d=h-c,i[d+n*s]+=i[d+n*r];while(--c);break}}if(i[s+n*s]!==0)for(r=s+1;r<l;r++){const u=i[s+n*r]/i[s+n*s];c=h;do d=h-c,i[d+n*r]=d<=s?0:i[d+n*r]-i[d+n*s]*u;while(--c)}}while(--o);s=2;do{r=s-1;do{const u=i[s+n*r]/i[s+n*s];c=n;do d=n-c,i[d+n*r]=i[d+n*r]-i[d+n*s]*u;while(--c)}while(r--)}while(--s);s=2;do{const u=1/i[s+n*s];c=n;do d=n-c,i[d+n*s]=i[d+n*s]*u;while(--c)}while(s--);s=2;do{r=2;do{if(d=i[e+r+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,r,d)}while(r--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,r=e+e,o=n+n,l=i+i,c=e*r,h=e*o,d=e*l,u=n*o,p=n*l,g=i*l,m=s*r,f=s*o,v=s*l,x=this.elements;return x[3*0+0]=1-(u+g),x[3*0+1]=h-v,x[3*0+2]=d+f,x[3*1+0]=h+v,x[3*1+1]=1-(c+g),x[3*1+2]=p-m,x[3*2+0]=d-f,x[3*2+1]=p+m,x[3*2+2]=1-(c+u),this}transpose(t){t===void 0&&(t=new He);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const hg=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class M{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new M);const n=t.x,i=t.y,s=t.z,r=this.x,o=this.y,l=this.z;return e.x=o*s-l*i,e.y=l*n-r*s,e.z=r*i-o*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new M(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new M(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new He([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new M);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z;return Math.sqrt((s-e)*(s-e)+(r-n)*(r-n)+(o-i)*(o-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z;return(s-e)*(s-e)+(r-n)*(r-n)+(o-i)*(o-i)}scale(t,e){e===void 0&&(e=new M);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new M),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new M),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new M),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=ug,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const r=dg;Math.abs(i.x)<.9?(r.set(1,0,0),i.cross(r,t)):(r.set(0,1,0),i.cross(r,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,r=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=r+(t.z-r)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate($a),$a.almostEquals(t,e)}clone(){return new M(this.x,this.y,this.z)}}M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);const ug=new M,dg=new M,$a=new M;class Le{constructor(t){t===void 0&&(t={}),this.lowerBound=new M,this.upperBound=new M,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,r=this.upperBound,o=n;s.copy(t[0]),o&&o.vmult(s,s),r.copy(s);for(let l=1;l<t.length;l++){let c=t[l];o&&(o.vmult(c,Ya),c=Ya),c.x>r.x&&(r.x=c.x),c.x<s.x&&(s.x=c.x),c.y>r.y&&(r.y=c.y),c.y<s.y&&(s.y=c.y),c.z>r.z&&(r.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(r,r)),i&&(s.x-=i,s.y-=i,s.z-=i,r.x+=i,r.y+=i,r.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Le().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,r=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,o=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return r&&o&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,r,o,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),r.set(c.x,h.y,c.z),o.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=ja,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,r,o,l,c,h,d);for(let u=0;u!==8;u++){const p=n[u];t.pointToLocal(p,p)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=ja,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,r,o,l,c,h,d);for(let u=0;u!==8;u++){const p=n[u];t.pointToWorld(p,p)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,r=1/e.z,o=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*r,u=(this.upperBound.z-n.z)*r,p=Math.max(Math.max(Math.min(o,l),Math.min(c,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(o,l),Math.max(c,h)),Math.max(d,u));return!(g<0||p>g)}}const Ya=new M,ja=[new M,new M,new M,new M,new M,new M,new M,new M];class Za{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const r=s;s=i,i=r}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Zl{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class ie{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new M),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=fg,i=pg;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new ie);const n=this.x,i=this.y,s=this.z,r=this.w,o=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+r*o+i*c-s*l,e.y=i*h+r*l+s*o-n*c,e.z=s*h+r*c+n*l-i*o,e.w=r*h-n*o-i*l-s*c,e}inverse(t){t===void 0&&(t=new ie);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const r=1/(e*e+n*n+i*i+s*s);return t.x*=r,t.y*=r,t.z*=r,t.w*=r,t}conjugate(t){return t===void 0&&(t=new ie),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new M);const n=t.x,i=t.y,s=t.z,r=this.x,o=this.y,l=this.z,c=this.w,h=c*n+o*s-l*i,d=c*i+l*n-r*s,u=c*s+r*i-o*n,p=-r*n-o*i-l*s;return e.x=h*c+p*-r+d*-l-u*-o,e.y=d*c+p*-o+u*-r-h*-l,e.z=u*c+p*-l+h*-o-d*-r,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const r=this.x,o=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=r*o+l*c;if(h>.499&&(n=2*Math.atan2(r,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(r,c),i=-Math.PI/2,s=0),n===void 0){const d=r*r,u=o*o,p=l*l;n=Math.atan2(2*o*c-2*r*l,1-2*u-2*p),i=Math.asin(2*h),s=Math.atan2(2*r*c-2*o*l,1-2*d-2*p)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),r=Math.cos(e/2),o=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*r*o+s*c*h,this.y=s*c*o-l*r*h,this.z=s*r*h+l*c*o,this.w=s*r*o-l*c*h):i==="YXZ"?(this.x=l*r*o+s*c*h,this.y=s*c*o-l*r*h,this.z=s*r*h-l*c*o,this.w=s*r*o+l*c*h):i==="ZXY"?(this.x=l*r*o-s*c*h,this.y=s*c*o+l*r*h,this.z=s*r*h+l*c*o,this.w=s*r*o-l*c*h):i==="ZYX"?(this.x=l*r*o-s*c*h,this.y=s*c*o+l*r*h,this.z=s*r*h-l*c*o,this.w=s*r*o+l*c*h):i==="YZX"?(this.x=l*r*o+s*c*h,this.y=s*c*o+l*r*h,this.z=s*r*h-l*c*o,this.w=s*r*o-l*c*h):i==="XZY"&&(this.x=l*r*o-s*c*h,this.y=s*c*o-l*r*h,this.z=s*r*h+l*c*o,this.w=s*r*o+l*c*h),this}clone(){return new ie(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new ie);const i=this.x,s=this.y,r=this.z,o=this.w;let l=t.x,c=t.y,h=t.z,d=t.w,u,p,g,m,f;return p=i*l+s*c+r*h+o*d,p<0&&(p=-p,l=-l,c=-c,h=-h,d=-d),1-p>1e-6?(u=Math.acos(p),g=Math.sin(u),m=Math.sin((1-e)*u)/g,f=Math.sin(e*u)/g):(m=1-e,f=e),n.x=m*i+f*l,n.y=m*s+f*c,n.z=m*r+f*h,n.w=m*o+f*d,n}integrate(t,e,n,i){i===void 0&&(i=new ie);const s=t.x*n.x,r=t.y*n.y,o=t.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(s*d+r*h-o*c),i.y+=u*(r*d+o*l-s*h),i.z+=u*(o*d+s*c-r*l),i.w+=u*(-s*l-r*c-o*h),i}}const fg=new M,pg=new M,mg={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class vt{constructor(t){t===void 0&&(t={}),this.id=vt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}vt.idCounter=0;vt.types=mg;class Wt{constructor(t){t===void 0&&(t={}),this.position=new M,this.quaternion=new ie,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Wt.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Wt.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new M),n.vsub(t,i),e.conjugate(Ja),Ja.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new M),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new M),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new M),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const Ja=new ie;class Xi extends vt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:r}=t;super({type:vt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new M;for(let s=0;s!==t.length;s++){const r=t[s],o=r.length;for(let l=0;l!==o;l++){const c=(l+1)%o;e[r[l]].vsub(e[r[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new M;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],r=this.vertices[n[2]];Xi.computeNormal(i,s,r,e)}static computeNormal(t,e,n,i){const s=new M,r=new M;e.vsub(t,r),n.vsub(e,s),s.cross(r,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,r,o,l,c){const h=new M;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const m=h.dot(r);m>u&&(u=m,d=g)}const p=[];for(let g=0;g<n.faces[d].length;g++){const m=n.vertices[n.faces[d][g]],f=new M;f.copy(m),s.vmult(f,f),i.vadd(f,f),p.push(f)}d>=0&&this.clipFaceAgainstHull(r,t,e,p,o,l,c)}findSeparatingAxis(t,e,n,i,s,r,o,l){const c=new M,h=new M,d=new M,u=new M,p=new M,g=new M;let m=Number.MAX_VALUE;const f=this;if(f.uniqueAxes)for(let v=0;v!==f.uniqueAxes.length;v++){n.vmult(f.uniqueAxes[v],c);const x=f.testSepAxis(c,t,e,n,i,s);if(x===!1)return!1;x<m&&(m=x,r.copy(c))}else{const v=o?o.length:f.faces.length;for(let x=0;x<v;x++){const _=o?o[x]:x;c.copy(f.faceNormals[_]),n.vmult(c,c);const w=f.testSepAxis(c,t,e,n,i,s);if(w===!1)return!1;w<m&&(m=w,r.copy(c))}}if(t.uniqueAxes)for(let v=0;v!==t.uniqueAxes.length;v++){s.vmult(t.uniqueAxes[v],h);const x=f.testSepAxis(h,t,e,n,i,s);if(x===!1)return!1;x<m&&(m=x,r.copy(h))}else{const v=l?l.length:t.faces.length;for(let x=0;x<v;x++){const _=l?l[x]:x;h.copy(t.faceNormals[_]),s.vmult(h,h);const w=f.testSepAxis(h,t,e,n,i,s);if(w===!1)return!1;w<m&&(m=w,r.copy(h))}}for(let v=0;v!==f.uniqueEdges.length;v++){n.vmult(f.uniqueEdges[v],u);for(let x=0;x!==t.uniqueEdges.length;x++)if(s.vmult(t.uniqueEdges[x],p),u.cross(p,g),!g.almostZero()){g.normalize();const _=f.testSepAxis(g,t,e,n,i,s);if(_===!1)return!1;_<m&&(m=_,r.copy(g))}}return i.vsub(e,d),d.dot(r)>0&&r.negate(r),!0}testSepAxis(t,e,n,i,s,r){const o=this;Xi.project(o,t,n,i,Nr),Xi.project(e,t,s,r,Fr);const l=Nr[0],c=Nr[1],h=Fr[0],d=Fr[1];if(l<d||h<c)return!1;const u=l-d,p=h-c;return u<p?u:p}calculateLocalInertia(t,e){const n=new M,i=new M;this.computeLocalAABB(i,n);const s=n.x-i.x,r=n.y-i.y,o=n.z-i.z;e.x=1/12*t*(2*r*2*r+2*o*2*o),e.y=1/12*t*(2*s*2*s+2*o*2*o),e.z=1/12*t*(2*r*2*r+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,r,o){const l=new M,c=new M,h=new M,d=new M,u=new M,p=new M,g=new M,m=new M,f=this,v=[],x=i,_=v;let w=-1,y=Number.MAX_VALUE;for(let I=0;I<f.faces.length;I++){l.copy(f.faceNormals[I]),n.vmult(l,l);const U=l.dot(t);U<y&&(y=U,w=I)}if(w<0)return;const A=f.faces[w];A.connectedFaces=[];for(let I=0;I<f.faces.length;I++)for(let U=0;U<f.faces[I].length;U++)A.indexOf(f.faces[I][U])!==-1&&I!==w&&A.connectedFaces.indexOf(I)===-1&&A.connectedFaces.push(I);const D=A.length;for(let I=0;I<D;I++){const U=f.vertices[A[I]],J=f.vertices[A[(I+1)%D]];U.vsub(J,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[w]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),p.copy(U),n.vmult(p,p),e.vadd(p,p);const C=A.connectedFaces[I];g.copy(this.faceNormals[C]);const P=this.getPlaneConstantOfFace(C);m.copy(g),n.vmult(m,m);const z=P-m.dot(e);for(this.clipFaceAgainstPlane(x,_,m,z);x.length;)x.shift();for(;_.length;)x.push(_.shift())}g.copy(this.faceNormals[w]);const b=this.getPlaneConstantOfFace(w);m.copy(g),n.vmult(m,m);const L=b-m.dot(e);for(let I=0;I<x.length;I++){let U=m.dot(x[I])+L;if(U<=s&&(console.log(`clamped: depth=${U} to minDist=${s}`),U=s),U<=r){const J=x[I];if(U<=1e-6){const C={point:J,normal:m,depth:U};o.push(C)}}}}clipFaceAgainstPlane(t,e,n,i){let s,r;const o=t.length;if(o<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let h=0;h<o;h++){if(c=t[h],r=n.dot(c)+i,s<0)if(r<0){const d=new M;d.copy(c),e.push(d)}else{const d=new M;l.lerp(c,s/(s-r),d),e.push(d)}else if(r<0){const d=new M;l.lerp(c,s/(s-r),d),e.push(d),e.push(c)}l=c,s=r}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new M);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let r,o,l,c,h,d,u=new M;for(let p=0;p<s.length;p++){u.copy(s[p]),e.vmult(u,u),t.vadd(u,u);const g=u;(r===void 0||g.x<r)&&(r=g.x),(c===void 0||g.x>c)&&(c=g.x),(o===void 0||g.y<o)&&(o=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(r,o,l),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new M);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const r=i[s];e.vmult(r,r)}for(let s=0;s<this.faceNormals.length;s++){const r=this.faceNormals[s];e.vmult(r,r)}}if(t)for(let s=0;s<n;s++){const r=i[s];r.vadd(t,r)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=null,r=new M;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let l=i[o];const c=e[n[o][0]],h=new M;t.vsub(c,h);const d=l.dot(h),u=new M;r.vsub(c,u);const p=l.dot(u);if(d<0&&p>0||d>0&&p<0)return!1}return s?1:-1}static project(t,e,n,i,s){const r=t.vertices.length,o=gg;let l=0,c=0;const h=vg,d=t.vertices;h.setZero(),Wt.vectorToLocalFrame(n,i,e,o),Wt.pointToLocalFrame(n,i,h,h);const u=h.dot(o);c=l=d[0].dot(o);for(let p=1;p<r;p++){const g=d[p].dot(o);g>l&&(l=g),g<c&&(c=g)}if(c-=u,l-=u,c>l){const p=c;c=l,l=p}s[0]=l,s[1]=c}}const Nr=[],Fr=[];new M;const gg=new M,vg=new M;class Ws extends vt{constructor(t){super({type:vt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=M,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],o=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new Xi({vertices:s,faces:r,axes:o});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new M),Ws.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let r=0;r<s.length;r++)wn.set(s[r][0],s[r][1],s[r][2]),e.vmult(wn,wn),t.vadd(wn,wn),n(wn.x,wn.y,wn.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;We[0].set(s.x,s.y,s.z),We[1].set(-s.x,s.y,s.z),We[2].set(-s.x,-s.y,s.z),We[3].set(-s.x,-s.y,-s.z),We[4].set(s.x,-s.y,-s.z),We[5].set(s.x,s.y,-s.z),We[6].set(-s.x,s.y,-s.z),We[7].set(s.x,-s.y,s.z);const r=We[0];e.vmult(r,r),t.vadd(r,r),i.copy(r),n.copy(r);for(let o=1;o<8;o++){const l=We[o];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const wn=new M,We=[new M,new M,new M,new M,new M,new M,new M,new M],mo={DYNAMIC:1,STATIC:2,KINEMATIC:4},go={AWAKE:0,SLEEPY:1,SLEEPING:2};class xt extends Zl{constructor(t){t===void 0&&(t={}),super(),this.id=xt.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new M,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new M,this.force=new M;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?xt.STATIC:xt.DYNAMIC,typeof t.type==typeof xt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=xt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new ie,this.initQuaternion=new ie,this.previousQuaternion=new ie,this.interpolatedQuaternion=new ie,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new M,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new He,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new He,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new M(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new M(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Le,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=Boolean(t.isTrigger),t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=xt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===xt.SLEEPING&&this.dispatchEvent(xt.wakeupEvent)}sleep(){this.sleepState=xt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===xt.AWAKE&&n<i?(this.sleepState=xt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(xt.sleepyEvent)):e===xt.SLEEPY&&n>i?this.wakeUp():e===xt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(xt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===xt.SLEEPING||this.type===xt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new M),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new M),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new M,s=new ie;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const r=t[s];r.updateBoundingSphereRadius();const o=e[s].length(),l=r.boundingSphereRadius;o+l>i&&(i=o+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=xg,r=_g,o=this.quaternion,l=this.aabb,c=yg;for(let h=0;h!==i;h++){const d=t[h];o.vmult(e[h],s),s.vadd(this.position,s),o.mult(n[h],r),d.calculateWorldAABB(s,r,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=bg,i=wg;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new M),this.type!==xt.DYNAMIC)return;this.sleepState===xt.SLEEPING&&this.wakeUp();const n=Sg;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new M),this.type!==xt.DYNAMIC)return;const n=Eg,i=Ag;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===xt.DYNAMIC&&(this.sleepState===xt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new M),this.type!==xt.DYNAMIC)return;this.sleepState===xt.SLEEPING&&this.wakeUp();const n=e,i=Tg;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Cg;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new M),this.type!==xt.DYNAMIC)return;const n=Lg,i=Pg;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=Rg;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Ws.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new M;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===xt.DYNAMIC||this.type===xt.KINEMATIC)||this.sleepState===xt.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,r=this.position,o=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,p=h*t;i.x+=o.x*p*u.x,i.y+=o.y*p*u.y,i.z+=o.z*p*u.z;const g=d.elements,m=this.angularFactor,f=l.x*m.x,v=l.y*m.y,x=l.z*m.z;s.x+=t*(g[0]*f+g[1]*v+g[2]*x),s.y+=t*(g[3]*f+g[4]*v+g[5]*x),s.z+=t*(g[6]*f+g[7]*v+g[8]*x),r.x+=i.x*t,r.y+=i.y*t,r.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}xt.idCounter=0;xt.COLLIDE_EVENT_NAME="collide";xt.DYNAMIC=mo.DYNAMIC;xt.STATIC=mo.STATIC;xt.KINEMATIC=mo.KINEMATIC;xt.AWAKE=go.AWAKE;xt.SLEEPY=go.SLEEPY;xt.SLEEPING=go.SLEEPING;xt.wakeupEvent={type:"wakeup"};xt.sleepyEvent={type:"sleepy"};xt.sleepEvent={type:"sleep"};const xg=new M,_g=new ie,yg=new Le,bg=new He,wg=new He,Mg=new He,Sg=new M,Eg=new M,Ag=new M,Tg=new M,Cg=new M,Lg=new M,Pg=new M,Rg=new M;class Jl{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&xt.STATIC||t.sleepState===xt.SLEEPING)&&(e.type&xt.STATIC||e.sleepState===xt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=Dg;e.position.vsub(t.position,s);const r=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<r&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=Ig,i=zg,s=Ng,r=t.length;for(let o=0;o!==r;o++)i[o]=t[o],s[o]=e[o];t.length=0,e.length=0;for(let o=0;o!==r;o++){const l=i[o].id,c=s[o].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=o,n.keys.push(h)}for(let o=0;o!==n.keys.length;o++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(s[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new M;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Dg=new M;new M;new ie;new M;const Ig={keys:[]},zg=[],Ng=[];new M;new M;new M;class Fg extends Jl{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let r,o;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)r=i[l],o=i[c],this.needBroadphaseCollision(r,o)&&this.intersectionTest(r,o,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class Bs{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,r,o){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=r,this.distance=o}}let Kl,Ql,tc,ec,nc,ic,sc;const vo={CLOSEST:1,ANY:2,ALL:4};Kl=vt.types.SPHERE;Ql=vt.types.PLANE;tc=vt.types.BOX;ec=vt.types.CYLINDER;nc=vt.types.CONVEXPOLYHEDRON;ic=vt.types.HEIGHTFIELD;sc=vt.types.TRIMESH;class ne{get[Kl](){return this._intersectSphere}get[Ql](){return this._intersectPlane}get[tc](){return this._intersectBox}get[ec](){return this._intersectConvex}get[nc](){return this._intersectConvex}get[ic](){return this._intersectHeightfield}get[sc](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new M),e===void 0&&(e=new M),this.from=t.clone(),this.to=e.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=ne.ANY,this.result=new Bs,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||ne.ANY,this.result=e.result||new Bs,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Ka),Or.length=0,t.broadphase.aabbQuery(t,Ka,Or),this.intersectBodies(Or),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=Og,s=Bg;for(let r=0,o=t.shapes.length;r<o;r++){const l=t.shapes[r];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[r],s),t.quaternion.vmult(t.shapeOffsets[r],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(Kg(s,this.direction,n)>t.boundingSphereRadius)return;const o=this[t.type];o&&o.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const r=this.from,o=this.to,l=this.direction,c=new M(0,0,1);e.vmult(c,c);const h=new M;r.vsub(n,h);const d=h.dot(c);o.vsub(n,h);const u=h.dot(c);if(d*u>0||r.distanceTo(o)<d)return;const p=c.dot(l);if(Math.abs(p)<this.precision)return;const g=new M,m=new M,f=new M;r.vsub(n,g);const v=-c.dot(g)/p;l.scale(v,m),r.vadd(m,f),this.reportIntersection(c,f,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const r=Ug;r.from.copy(this.from),r.to.copy(this.to),Wt.pointToLocalFrame(n,e,r.from,r.from),Wt.pointToLocalFrame(n,e,r.to,r.to),r.updateDirection();const o=kg;let l,c,h,d;l=c=0,h=d=t.data.length-1;const u=new Le;r.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,o,!0),l=Math.max(l,o[0]),c=Math.max(c,o[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,o,!0),h=Math.min(h,o[0]+1),d=Math.min(d,o[1]+1);for(let p=l;p<h;p++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(p,g,u),!!u.overlapsRay(r)){if(t.getConvexTrianglePillar(p,g,!1),Wt.pointToWorldFrame(n,e,t.pillarOffset,Rs),this._intersectConvex(t.pillarConvex,e,Rs,i,s,Qa),this.result.shouldStop)return;t.getConvexTrianglePillar(p,g,!0),Wt.pointToWorldFrame(n,e,t.pillarOffset,Rs),this._intersectConvex(t.pillarConvex,e,Rs,i,s,Qa)}}}_intersectSphere(t,e,n,i,s){const r=this.from,o=this.to,l=t.radius,c=(o.x-r.x)**2+(o.y-r.y)**2+(o.z-r.z)**2,h=2*((o.x-r.x)*(r.x-n.x)+(o.y-r.y)*(r.y-n.y)+(o.z-r.z)*(r.z-n.z)),d=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-l**2,u=h**2-4*c*d,p=Vg,g=Gg;if(!(u<0))if(u===0)r.lerp(o,u,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1);else{const m=(-h-Math.sqrt(u))/(2*c),f=(-h+Math.sqrt(u))/(2*c);if(m>=0&&m<=1&&(r.lerp(o,m,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1)),this.result.shouldStop)return;f>=0&&f<=1&&(r.lerp(o,f,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1))}}_intersectConvex(t,e,n,i,s,r){const o=Hg,l=tl,c=r&&r.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,p=this.direction,g=this.from,m=this.to,f=g.distanceTo(m),v=c?c.length:h.length,x=this.result;for(let _=0;!x.shouldStop&&_<v;_++){const w=c?c[_]:_,y=h[w],A=u[w],D=e,b=n;l.copy(d[y[0]]),D.vmult(l,l),l.vadd(b,l),l.vsub(g,l),D.vmult(A,o);const L=p.dot(o);if(Math.abs(L)<this.precision)continue;const I=o.dot(l)/L;if(!(I<0)){p.scale(I,be),be.vadd(g,be),ke.copy(d[y[0]]),D.vmult(ke,ke),b.vadd(ke,ke);for(let U=1;!x.shouldStop&&U<y.length-1;U++){qe.copy(d[y[U]]),Xe.copy(d[y[U+1]]),D.vmult(qe,qe),D.vmult(Xe,Xe),b.vadd(qe,qe),b.vadd(Xe,Xe);const J=be.distanceTo(g);!(ne.pointInTriangle(be,ke,qe,Xe)||ne.pointInTriangle(be,qe,ke,Xe))||J>f||this.reportIntersection(o,be,s,i,w)}}}}_intersectTrimesh(t,e,n,i,s,r){const o=Wg,l=Zg,c=Jg,h=tl,d=qg,u=Xg,p=$g,g=jg,m=Yg,f=t.indices;t.vertices;const v=this.from,x=this.to,_=this.direction;c.position.copy(n),c.quaternion.copy(e),Wt.vectorToLocalFrame(n,e,_,d),Wt.pointToLocalFrame(n,e,v,u),Wt.pointToLocalFrame(n,e,x,p),p.x*=t.scale.x,p.y*=t.scale.y,p.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,p.vsub(u,d),d.normalize();const w=u.distanceSquared(p);t.tree.rayQuery(this,c,l);for(let y=0,A=l.length;!this.result.shouldStop&&y!==A;y++){const D=l[y];t.getNormal(D,o),t.getVertex(f[D*3],ke),ke.vsub(u,h);const b=d.dot(o),L=o.dot(h)/b;if(L<0)continue;d.scale(L,be),be.vadd(u,be),t.getVertex(f[D*3+1],qe),t.getVertex(f[D*3+2],Xe);const I=be.distanceSquared(u);!(ne.pointInTriangle(be,qe,ke,Xe)||ne.pointInTriangle(be,ke,qe,Xe))||I>w||(Wt.vectorToWorldFrame(e,o,m),Wt.pointToWorldFrame(n,e,be,g),this.reportIntersection(m,g,s,i,D))}l.length=0}reportIntersection(t,e,n,i,s){const r=this.from,o=this.to,l=r.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case ne.ALL:this.hasHit=!0,c.set(r,o,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case ne.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(r,o,t,e,n,i,l));break;case ne.ANY:this.hasHit=!0,c.hasHit=!0,c.set(r,o,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Fn),n.vsub(e,Oi),t.vsub(e,Br);const s=Fn.dot(Fn),r=Fn.dot(Oi),o=Fn.dot(Br),l=Oi.dot(Oi),c=Oi.dot(Br);let h,d;return(h=l*o-r*c)>=0&&(d=s*c-r*o)>=0&&h+d<s*l-r*r}}ne.CLOSEST=vo.CLOSEST;ne.ANY=vo.ANY;ne.ALL=vo.ALL;const Ka=new Le,Or=[],Oi=new M,Br=new M,Og=new M,Bg=new ie,be=new M,ke=new M,qe=new M,Xe=new M;new M;new Bs;const Qa={faceList:[0]},Rs=new M,Ug=new ne,kg=[],Vg=new M,Gg=new M,Hg=new M;new M;new M;const tl=new M,Wg=new M,qg=new M,Xg=new M,$g=new M,Yg=new M,jg=new M;new Le;const Zg=[],Jg=new Wt,Fn=new M,Ds=new M;function Kg(a,t,e){e.vsub(a,Fn);const n=Fn.dot(t);return t.scale(n,Ds),Ds.vadd(a,Ds),e.distanceTo(Ds)}class vi extends Jl{static checkBounds(t,e,n){let i,s;n===0?(i=t.position.x,s=e.position.x):n===1?(i=t.position.y,s=e.position.y):n===2&&(i=t.position.z,s=e.position.z);const r=t.boundingRadius,o=e.boundingRadius,l=i+r;return s-o<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)t[s+1]=t[s];t[s+1]=i}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const i=this.axisList,s=i.length,r=this.axisIndex;let o,l;for(this.dirty&&(this.sortList(),this.dirty=!1),o=0;o!==s;o++){const c=i[o];for(l=o+1;l<s;l++){const h=i[l];if(this.needBroadphaseCollision(c,h)){if(!vi.checkBounds(c,h,r))break;this.intersectionTest(c,h,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){const s=t[i];s.aabbNeedsUpdate&&s.updateAABB()}e===0?vi.insertionSortX(t):e===1?vi.insertionSortY(t):e===2&&vi.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,s=0,r=0;const o=this.axisList,l=o.length,c=1/l;for(let p=0;p!==l;p++){const g=o[p],m=g.position.x;t+=m,e+=m*m;const f=g.position.y;n+=f,i+=f*f;const v=g.position.z;s+=v,r+=v*v}const h=e-t*t*c,d=i-n*n*c,u=r-s*s*c;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let s="x";i===1&&(s="y"),i===2&&(s="z");const r=this.axisList;e.lowerBound[s],e.upperBound[s];for(let o=0;o<r.length;o++){const l=r[o];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}}class Qg{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class el{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class ss{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=ss.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new el,this.jacobianElementB=new el,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,r=n;this.a=4/(r*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(r*r*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),r=this.computeGiMf();return-s*t-i*e-r*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,r=i.position;return t.spatial.dot(s)+e.spatial.dot(r)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,r=i.velocity,o=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(s,o)+e.multiplyVectors(r,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,r=i.vlambda,o=n.wlambda,l=i.wlambda;return t.multiplyVectors(s,o)+e.multiplyVectors(r,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,r=n.torque,o=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,nl),o.scale(h,il),n.invInertiaWorldSolve.vmult(r,sl),i.invInertiaWorldSolve.vmult(l,rl),t.multiplyVectors(nl,sl)+e.multiplyVectors(il,rl)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,r=i.invMassSolve,o=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+r;return o.vmult(t.rotational,Is),c+=Is.dot(t.rotational),l.vmult(e.rotational,Is),c+=Is.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,r=t0;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,r),i.wlambda.addScaledVector(t,r,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,r),s.wlambda.addScaledVector(t,r,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}ss.idCounter=0;const nl=new M,il=new M,sl=new M,rl=new M,Is=new M,t0=new M;class e0 extends ss{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,r=this.ri,o=this.rj,l=n0,c=i0,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,p=s.angularVelocity;s.force,s.torque;const g=s0,m=this.jacobianElementA,f=this.jacobianElementB,v=this.ni;r.cross(v,l),o.cross(v,c),v.negate(m.spatial),l.negate(m.rotational),f.spatial.copy(v),f.rotational.copy(c),g.copy(s.position),g.vadd(o,g),g.vsub(i.position,g),g.vsub(r,g);const x=v.dot(g),_=this.restitution+1,w=_*u.dot(v)-_*h.dot(v)+p.dot(c)-d.dot(l),y=this.computeGiMf();return-x*e-w*n-t*y}getImpactVelocityAlongNormal(){const t=r0,e=o0,n=a0,i=l0,s=c0;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const n0=new M,i0=new M,s0=new M,r0=new M,o0=new M,a0=new M,l0=new M,c0=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class ol extends ss{constructor(t,e,n){super(t,e,-n,n),this.ri=new M,this.rj=new M,this.t=new M}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=h0,r=u0,o=this.t;n.cross(o,s),i.cross(o,r);const l=this.jacobianElementA,c=this.jacobianElementB;o.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(o),c.rotational.copy(r);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const h0=new M,u0=new M;class rs{constructor(t,e,n){n=Qg.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=rs.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}rs.idCounter=0;class os{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=os.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}os.idCounter=0;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new ne;new M;new M;new M;new M(1,0,0),new M(0,1,0),new M(0,0,1);new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class d0 extends vt{constructor(t){if(super({type:vt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new M);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const s=this.radius,r=["x","y","z"];for(let o=0;o<r.length;o++){const l=r[o];n[l]=t[l]-s,i[l]=t[l]+s}}}new M;new M;new M;new M;new M;new M;new M;new M;new M;class f0 extends vt{constructor(){super({type:vt.types.PLANE}),this.worldNormal=new M,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new M),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){ln.set(0,0,1),e.vmult(ln,ln);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),ln.x===1?i.x=t.x:ln.x===-1&&(n.x=t.x),ln.y===1?i.y=t.y:ln.y===-1&&(n.y=t.y),ln.z===1?i.z=t.z:ln.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const ln=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new Le;new M;new Le;new M;new M;new M;new M;new M;new M;new M;new Le;new M;new Wt;new Le;class p0{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class m0 extends p0{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,r=this.equations,o=r.length,l=e.bodies,c=l.length,h=t;let d,u,p,g,m,f;if(o!==0)for(let w=0;w!==c;w++)l[w].updateSolveMassProperties();const v=v0,x=x0,_=g0;v.length=o,x.length=o,_.length=o;for(let w=0;w!==o;w++){const y=r[w];_[w]=0,x[w]=y.computeB(h),v[w]=1/y.computeC()}if(o!==0){for(let A=0;A!==c;A++){const D=l[A],b=D.vlambda,L=D.wlambda;b.set(0,0,0),L.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let A=0;A!==o;A++){const D=r[A];d=x[A],u=v[A],f=_[A],m=D.computeGWlambda(),p=u*(d-m-D.eps*f),f+p<D.minForce?p=D.minForce-f:f+p>D.maxForce&&(p=D.maxForce-f),_[A]+=p,g+=p>0?p:-p,D.addToWlambda(p)}if(g*g<s)break}for(let A=0;A!==c;A++){const D=l[A],b=D.velocity,L=D.angularVelocity;D.vlambda.vmul(D.linearFactor,D.vlambda),b.vadd(D.vlambda,b),D.wlambda.vmul(D.angularFactor,D.wlambda),L.vadd(D.wlambda,L)}let w=r.length;const y=1/h;for(;w--;)r[w].multiplier=_[w]*y}return n}}const g0=[],v0=[],x0=[];xt.STATIC;class _0{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class y0 extends _0{constructor(){super(...arguments),this.type=M}constructObject(){return new M}}const jt={sphereSphere:vt.types.SPHERE,spherePlane:vt.types.SPHERE|vt.types.PLANE,boxBox:vt.types.BOX|vt.types.BOX,sphereBox:vt.types.SPHERE|vt.types.BOX,planeBox:vt.types.PLANE|vt.types.BOX,convexConvex:vt.types.CONVEXPOLYHEDRON,sphereConvex:vt.types.SPHERE|vt.types.CONVEXPOLYHEDRON,planeConvex:vt.types.PLANE|vt.types.CONVEXPOLYHEDRON,boxConvex:vt.types.BOX|vt.types.CONVEXPOLYHEDRON,sphereHeightfield:vt.types.SPHERE|vt.types.HEIGHTFIELD,boxHeightfield:vt.types.BOX|vt.types.HEIGHTFIELD,convexHeightfield:vt.types.CONVEXPOLYHEDRON|vt.types.HEIGHTFIELD,sphereParticle:vt.types.PARTICLE|vt.types.SPHERE,planeParticle:vt.types.PLANE|vt.types.PARTICLE,boxParticle:vt.types.BOX|vt.types.PARTICLE,convexParticle:vt.types.PARTICLE|vt.types.CONVEXPOLYHEDRON,cylinderCylinder:vt.types.CYLINDER,sphereCylinder:vt.types.SPHERE|vt.types.CYLINDER,planeCylinder:vt.types.PLANE|vt.types.CYLINDER,boxCylinder:vt.types.BOX|vt.types.CYLINDER,convexCylinder:vt.types.CONVEXPOLYHEDRON|vt.types.CYLINDER,heightfieldCylinder:vt.types.HEIGHTFIELD|vt.types.CYLINDER,particleCylinder:vt.types.PARTICLE|vt.types.CYLINDER,sphereTrimesh:vt.types.SPHERE|vt.types.TRIMESH,planeTrimesh:vt.types.PLANE|vt.types.TRIMESH};class b0{get[jt.sphereSphere](){return this.sphereSphere}get[jt.spherePlane](){return this.spherePlane}get[jt.boxBox](){return this.boxBox}get[jt.sphereBox](){return this.sphereBox}get[jt.planeBox](){return this.planeBox}get[jt.convexConvex](){return this.convexConvex}get[jt.sphereConvex](){return this.sphereConvex}get[jt.planeConvex](){return this.planeConvex}get[jt.boxConvex](){return this.boxConvex}get[jt.sphereHeightfield](){return this.sphereHeightfield}get[jt.boxHeightfield](){return this.boxHeightfield}get[jt.convexHeightfield](){return this.convexHeightfield}get[jt.sphereParticle](){return this.sphereParticle}get[jt.planeParticle](){return this.planeParticle}get[jt.boxParticle](){return this.boxParticle}get[jt.convexParticle](){return this.convexParticle}get[jt.cylinderCylinder](){return this.convexConvex}get[jt.sphereCylinder](){return this.sphereConvex}get[jt.planeCylinder](){return this.planeConvex}get[jt.boxCylinder](){return this.boxConvex}get[jt.convexCylinder](){return this.convexConvex}get[jt.heightfieldCylinder](){return this.heightfieldCylinder}get[jt.particleCylinder](){return this.particleCylinder}get[jt.sphereTrimesh](){return this.sphereTrimesh}get[jt.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new y0,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,r){let o;this.contactPointPool.length?(o=this.contactPointPool.pop(),o.bi=t,o.bj=e):o=new e0(t,e),o.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;o.restitution=l.restitution,o.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(o.restitution=c.restitution*h.restitution),o.si=s||n,o.sj=r||i,o}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,r=t.sj,o=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||n.material,d=r.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(o.frictionGravity||o.gravity).length();let p=n.invMass+i.invMass;p>0&&(p=1/p);const g=this.frictionEquationPool,m=g.length?g.pop():new ol(n,i,u*p),f=g.length?g.pop():new ol(n,i,u*p);return m.bi=f.bi=n,m.bj=f.bj=i,m.minForce=f.minForce=-u*p,m.maxForce=f.maxForce=u*p,m.ri.copy(t.ri),m.rj.copy(t.rj),f.ri.copy(t.ri),f.rj.copy(t.rj),t.ni.tangents(m.t,f.t),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),f.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),m.enabled=f.enabled=t.enabled,e.push(m,f),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Dn.setZero(),di.setZero(),fi.setZero();const s=e.bi;e.bj;for(let o=0;o!==t;o++)e=this.result[this.result.length-1-o],e.bi!==s?(Dn.vadd(e.ni,Dn),di.vadd(e.ri,di),fi.vadd(e.rj,fi)):(Dn.vsub(e.ni,Dn),di.vadd(e.rj,di),fi.vadd(e.ri,fi));const r=1/t;di.scale(r,n.ri),fi.scale(r,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Dn.normalize(),Dn.tangents(n.t,i.t)}getContacts(t,e,n,i,s,r,o){this.contactPointPool=s,this.frictionEquationPool=o,this.result=i,this.frictionResult=r;const l=S0,c=E0,h=w0,d=M0;for(let u=0,p=t.length;u!==p;u++){const g=t[u],m=e[u];let f=null;g.material&&m.material&&(f=n.getContactMaterial(g.material,m.material)||null);const v=g.type&xt.KINEMATIC&&m.type&xt.STATIC||g.type&xt.STATIC&&m.type&xt.KINEMATIC||g.type&xt.KINEMATIC&&m.type&xt.KINEMATIC;for(let x=0;x<g.shapes.length;x++){g.quaternion.mult(g.shapeOrientations[x],l),g.quaternion.vmult(g.shapeOffsets[x],h),h.vadd(g.position,h);const _=g.shapes[x];for(let w=0;w<m.shapes.length;w++){m.quaternion.mult(m.shapeOrientations[w],c),m.quaternion.vmult(m.shapeOffsets[w],d),d.vadd(m.position,d);const y=m.shapes[w];if(!(_.collisionFilterMask&y.collisionFilterGroup&&y.collisionFilterMask&_.collisionFilterGroup)||h.distanceTo(d)>_.boundingSphereRadius+y.boundingSphereRadius)continue;let A=null;_.material&&y.material&&(A=n.getContactMaterial(_.material,y.material)||null),this.currentContactMaterial=A||f||n.defaultContactMaterial;const D=_.type|y.type,b=this[D];if(b){let L=!1;_.type<y.type?L=b.call(this,_,y,h,d,l,c,g,m,_,y,v):L=b.call(this,y,_,d,h,c,l,m,g,_,y,v),L&&v&&(n.shapeOverlapKeeper.set(_.id,y.id),n.bodyOverlapKeeper.set(g.id,m.id))}}}}}sphereSphere(t,e,n,i,s,r,o,l,c,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(o,l,t,e,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(o.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,r,o,l,c,h,d){const u=this.createContactEquation(o,l,t,e,c,h);if(u.ni.set(0,0,1),r.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,zs),u.ni.scale(u.ni.dot(zs),al),zs.vsub(al,u.rj),-zs.dot(u.ni)<=t.radius){if(d)return!0;const p=u.ri,g=u.rj;p.vadd(n,p),p.vsub(o.position,p),g.vadd(i,g),g.vsub(l.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,r,o,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,r,o,l,t,e,d)}sphereBox(t,e,n,i,s,r,o,l,c,h,d){const u=this.v3pool,p=J0;n.vsub(i,Ns),e.getSideNormals(p,r);const g=t.radius;let m=!1;const f=Q0,v=tv,x=ev;let _=null,w=0,y=0,A=0,D=null;for(let N=0,Z=p.length;N!==Z&&m===!1;N++){const G=Y0;G.copy(p[N]);const X=G.length();G.normalize();const et=Ns.dot(G);if(et<X+g&&et>0){const H=j0,B=Z0;H.copy(p[(N+1)%3]),B.copy(p[(N+2)%3]);const nt=H.length(),st=B.length();H.normalize(),B.normalize();const ct=Ns.dot(H),$=Ns.dot(B);if(ct<nt&&ct>-nt&&$<st&&$>-st){const Pt=Math.abs(et-X-g);if((D===null||Pt<D)&&(D=Pt,y=ct,A=$,_=X,f.copy(G),v.copy(H),x.copy(B),w++,d))return!0}}}if(w){m=!0;const N=this.createContactEquation(o,l,t,e,c,h);f.scale(-g,N.ri),N.ni.copy(f),N.ni.negate(N.ni),f.scale(_,f),v.scale(y,v),f.vadd(v,f),x.scale(A,x),f.vadd(x,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(o.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(l.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let b=u.get();const L=K0;for(let N=0;N!==2&&!m;N++)for(let Z=0;Z!==2&&!m;Z++)for(let G=0;G!==2&&!m;G++)if(b.set(0,0,0),N?b.vadd(p[0],b):b.vsub(p[0],b),Z?b.vadd(p[1],b):b.vsub(p[1],b),G?b.vadd(p[2],b):b.vsub(p[2],b),i.vadd(b,L),L.vsub(n,L),L.lengthSquared()<g*g){if(d)return!0;m=!0;const X=this.createContactEquation(o,l,t,e,c,h);X.ri.copy(L),X.ri.normalize(),X.ni.copy(X.ri),X.ri.scale(g,X.ri),X.rj.copy(b),X.ri.vadd(n,X.ri),X.ri.vsub(o.position,X.ri),X.rj.vadd(i,X.rj),X.rj.vsub(l.position,X.rj),this.result.push(X),this.createFrictionEquationsFromContact(X,this.frictionResult)}u.release(b),b=null;const I=u.get(),U=u.get(),J=u.get(),C=u.get(),P=u.get(),z=p.length;for(let N=0;N!==z&&!m;N++)for(let Z=0;Z!==z&&!m;Z++)if(N%3!==Z%3){p[Z].cross(p[N],I),I.normalize(),p[N].vadd(p[Z],U),J.copy(n),J.vsub(U,J),J.vsub(i,J);const G=J.dot(I);I.scale(G,C);let X=0;for(;X===N%3||X===Z%3;)X++;P.copy(n),P.vsub(C,P),P.vsub(U,P),P.vsub(i,P);const et=Math.abs(G),H=P.length();if(et<p[X].length()&&H<g){if(d)return!0;m=!0;const B=this.createContactEquation(o,l,t,e,c,h);U.vadd(C,B.rj),B.rj.copy(B.rj),P.negate(B.ni),B.ni.normalize(),B.ri.copy(B.rj),B.ri.vadd(i,B.ri),B.ri.vsub(n,B.ri),B.ri.normalize(),B.ri.scale(g,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(o.position,B.ri),B.rj.vadd(i,B.rj),B.rj.vsub(l.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}}u.release(I,U,J,C,P)}planeBox(t,e,n,i,s,r,o,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,r,o,l,t,e,d)}convexConvex(t,e,n,i,s,r,o,l,c,h,d,u,p){const g=gv;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,r,g,u,p)){const m=[],f=vv;t.clipAgainstHull(n,s,e,i,r,g,-100,100,m);let v=0;for(let x=0;x!==m.length;x++){if(d)return!0;const _=this.createContactEquation(o,l,t,e,c,h),w=_.ri,y=_.rj;g.negate(_.ni),m[x].normal.negate(f),f.scale(m[x].depth,f),m[x].point.vadd(f,w),y.copy(m[x].point),w.vsub(n,w),y.vsub(i,y),w.vadd(n,w),w.vsub(o.position,w),y.vadd(i,y),y.vsub(l.position,y),this.result.push(_),v++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&v&&this.createFrictionFromAverage(v)}}sphereConvex(t,e,n,i,s,r,o,l,c,h,d){const u=this.v3pool;n.vsub(i,nv);const p=e.faceNormals,g=e.faces,m=e.vertices,f=t.radius;let v=!1;for(let x=0;x!==m.length;x++){const _=m[x],w=ov;r.vmult(_,w),i.vadd(w,w);const y=rv;if(w.vsub(n,y),y.lengthSquared()<f*f){if(d)return!0;v=!0;const A=this.createContactEquation(o,l,t,e,c,h);A.ri.copy(y),A.ri.normalize(),A.ni.copy(A.ri),A.ri.scale(f,A.ri),w.vsub(i,A.rj),A.ri.vadd(n,A.ri),A.ri.vsub(o.position,A.ri),A.rj.vadd(i,A.rj),A.rj.vsub(l.position,A.rj),this.result.push(A),this.createFrictionEquationsFromContact(A,this.frictionResult);return}}for(let x=0,_=g.length;x!==_&&v===!1;x++){const w=p[x],y=g[x],A=av;r.vmult(w,A);const D=lv;r.vmult(m[y[0]],D),D.vadd(i,D);const b=cv;A.scale(-f,b),n.vadd(b,b);const L=hv;b.vsub(D,L);const I=L.dot(A),U=uv;if(n.vsub(D,U),I<0&&U.dot(A)>0){const J=[];for(let C=0,P=y.length;C!==P;C++){const z=u.get();r.vmult(m[y[C]],z),i.vadd(z,z),J.push(z)}if($0(J,A,n)){if(d)return!0;v=!0;const C=this.createContactEquation(o,l,t,e,c,h);A.scale(-f,C.ri),A.negate(C.ni);const P=u.get();A.scale(-I,P);const z=u.get();A.scale(-f,z),n.vsub(i,C.rj),C.rj.vadd(z,C.rj),C.rj.vadd(P,C.rj),C.rj.vadd(i,C.rj),C.rj.vsub(l.position,C.rj),C.ri.vadd(n,C.ri),C.ri.vsub(o.position,C.ri),u.release(P),u.release(z),this.result.push(C),this.createFrictionEquationsFromContact(C,this.frictionResult);for(let N=0,Z=J.length;N!==Z;N++)u.release(J[N]);return}else for(let C=0;C!==y.length;C++){const P=u.get(),z=u.get();r.vmult(m[y[(C+1)%y.length]],P),r.vmult(m[y[(C+2)%y.length]],z),i.vadd(P,P),i.vadd(z,z);const N=iv;z.vsub(P,N);const Z=sv;N.unit(Z);const G=u.get(),X=u.get();n.vsub(P,X);const et=X.dot(Z);Z.scale(et,G),G.vadd(P,G);const H=u.get();if(G.vsub(n,H),et>0&&et*et<N.lengthSquared()&&H.lengthSquared()<f*f){if(d)return!0;const B=this.createContactEquation(o,l,t,e,c,h);G.vsub(i,B.rj),G.vsub(n,B.ni),B.ni.normalize(),B.ni.scale(f,B.ri),B.rj.vadd(i,B.rj),B.rj.vsub(l.position,B.rj),B.ri.vadd(n,B.ri),B.ri.vsub(o.position,B.ri),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult);for(let nt=0,st=J.length;nt!==st;nt++)u.release(J[nt]);u.release(P),u.release(z),u.release(G),u.release(H),u.release(X);return}u.release(P),u.release(z),u.release(G),u.release(H),u.release(X)}for(let C=0,P=J.length;C!==P;C++)u.release(J[C])}}}planeConvex(t,e,n,i,s,r,o,l,c,h,d){const u=dv,p=fv;p.set(0,0,1),s.vmult(p,p);let g=0;const m=pv;for(let f=0;f!==e.vertices.length;f++)if(u.copy(e.vertices[f]),r.vmult(u,u),i.vadd(u,u),u.vsub(n,m),p.dot(m)<=0){if(d)return!0;const x=this.createContactEquation(o,l,t,e,c,h),_=mv;p.scale(p.dot(m),_),u.vsub(_,_),_.vsub(n,x.ri),x.ni.copy(p),u.vsub(i,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(o.position,x.ri),x.rj.vadd(i,x.rj),x.rj.vsub(l.position,x.rj),this.result.push(x),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,r,o,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,r,o,l,t,e,d)}sphereHeightfield(t,e,n,i,s,r,o,l,c,h,d){const u=e.data,p=t.radius,g=e.elementSize,m=Lv,f=Cv;Wt.pointToLocalFrame(i,r,n,f);let v=Math.floor((f.x-p)/g)-1,x=Math.ceil((f.x+p)/g)+1,_=Math.floor((f.y-p)/g)-1,w=Math.ceil((f.y+p)/g)+1;if(x<0||w<0||v>u.length||_>u[0].length)return;v<0&&(v=0),x<0&&(x=0),_<0&&(_=0),w<0&&(w=0),v>=u.length&&(v=u.length-1),x>=u.length&&(x=u.length-1),w>=u[0].length&&(w=u[0].length-1),_>=u[0].length&&(_=u[0].length-1);const y=[];e.getRectMinMax(v,_,x,w,y);const A=y[0],D=y[1];if(f.z-p>D||f.z+p<A)return;const b=this.result;for(let L=v;L<x;L++)for(let I=_;I<w;I++){const U=b.length;let J=!1;if(e.getConvexTrianglePillar(L,I,!1),Wt.pointToWorldFrame(i,r,e.pillarOffset,m),n.distanceTo(m)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(J=this.sphereConvex(t,e.pillarConvex,n,m,s,r,o,l,t,e,d)),d&&J||(e.getConvexTrianglePillar(L,I,!0),Wt.pointToWorldFrame(i,r,e.pillarOffset,m),n.distanceTo(m)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(J=this.sphereConvex(t,e.pillarConvex,n,m,s,r,o,l,t,e,d)),d&&J))return!0;if(b.length-U>2)return}}boxHeightfield(t,e,n,i,s,r,o,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,r,o,l,t,e,d)}convexHeightfield(t,e,n,i,s,r,o,l,c,h,d){const u=e.data,p=e.elementSize,g=t.boundingSphereRadius,m=Av,f=Tv,v=Ev;Wt.pointToLocalFrame(i,r,n,v);let x=Math.floor((v.x-g)/p)-1,_=Math.ceil((v.x+g)/p)+1,w=Math.floor((v.y-g)/p)-1,y=Math.ceil((v.y+g)/p)+1;if(_<0||y<0||x>u.length||w>u[0].length)return;x<0&&(x=0),_<0&&(_=0),w<0&&(w=0),y<0&&(y=0),x>=u.length&&(x=u.length-1),_>=u.length&&(_=u.length-1),y>=u[0].length&&(y=u[0].length-1),w>=u[0].length&&(w=u[0].length-1);const A=[];e.getRectMinMax(x,w,_,y,A);const D=A[0],b=A[1];if(!(v.z-g>b||v.z+g<D))for(let L=x;L<_;L++)for(let I=w;I<y;I++){let U=!1;if(e.getConvexTrianglePillar(L,I,!1),Wt.pointToWorldFrame(i,r,e.pillarOffset,m),n.distanceTo(m)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(U=this.convexConvex(t,e.pillarConvex,n,m,s,r,o,l,null,null,d,f,null)),d&&U||(e.getConvexTrianglePillar(L,I,!0),Wt.pointToWorldFrame(i,r,e.pillarOffset,m),n.distanceTo(m)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(U=this.convexConvex(t,e.pillarConvex,n,m,s,r,o,l,null,null,d,f,null)),d&&U))return!0}}sphereParticle(t,e,n,i,s,r,o,l,c,h,d){const u=bv;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(l,o,e,t,c,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,r,o,l,c,h,d){const u=xv;u.set(0,0,1),o.quaternion.vmult(u,u);const p=_v;if(i.vsub(o.position,p),u.dot(p)<=0){if(d)return!0;const m=this.createContactEquation(l,o,e,t,c,h);m.ni.copy(u),m.ni.negate(m.ni),m.ri.set(0,0,0);const f=yv;u.scale(u.dot(i),f),i.vsub(f,f),m.rj.copy(f),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}boxParticle(t,e,n,i,s,r,o,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,r,o,l,t,e,d)}convexParticle(t,e,n,i,s,r,o,l,c,h,d){let u=-1;const p=Mv,g=Sv;let m=null;const f=wv;if(f.copy(i),f.vsub(n,f),s.conjugate(ll),ll.vmult(f,f),t.pointIsInside(f)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let v=0,x=t.faces.length;v!==x;v++){const _=[t.worldVertices[t.faces[v][0]]],w=t.worldFaceNormals[v];i.vsub(_[0],cl);const y=-w.dot(cl);if(m===null||Math.abs(y)<Math.abs(m)){if(d)return!0;m=y,u=v,p.copy(w)}}if(u!==-1){const v=this.createContactEquation(l,o,e,t,c,h);p.scale(m,g),g.vadd(i,g),g.vsub(n,g),v.rj.copy(g),p.negate(v.ni),v.ri.set(0,0,0);const x=v.ri,_=v.rj;x.vadd(i,x),x.vsub(l.position,x),_.vadd(n,_),_.vsub(o.position,_),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,r,o,l,c,h,d){return this.convexHeightfield(e,t,i,n,r,s,l,o,c,h,d)}particleCylinder(t,e,n,i,s,r,o,l,c,h,d){return this.convexParticle(e,t,i,n,r,s,l,o,c,h,d)}sphereTrimesh(t,e,n,i,s,r,o,l,c,h,d){const u=I0,p=z0,g=N0,m=F0,f=O0,v=B0,x=G0,_=D0,w=P0,y=H0;Wt.pointToLocalFrame(i,r,n,f);const A=t.radius;x.lowerBound.set(f.x-A,f.y-A,f.z-A),x.upperBound.set(f.x+A,f.y+A,f.z+A),e.getTrianglesInAABB(x,y);const D=R0,b=t.radius*t.radius;for(let C=0;C<y.length;C++)for(let P=0;P<3;P++)if(e.getVertex(e.indices[y[C]*3+P],D),D.vsub(f,w),w.lengthSquared()<=b){if(_.copy(D),Wt.pointToWorldFrame(i,r,_,D),D.vsub(n,w),d)return!0;let z=this.createContactEquation(o,l,t,e,c,h);z.ni.copy(w),z.ni.normalize(),z.ri.copy(z.ni),z.ri.scale(t.radius,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(o.position,z.ri),z.rj.copy(D),z.rj.vsub(l.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}for(let C=0;C<y.length;C++)for(let P=0;P<3;P++){e.getVertex(e.indices[y[C]*3+P],u),e.getVertex(e.indices[y[C]*3+(P+1)%3],p),p.vsub(u,g),f.vsub(p,v);const z=v.dot(g);f.vsub(u,v);let N=v.dot(g);if(N>0&&z<0&&(f.vsub(u,v),m.copy(g),m.normalize(),N=v.dot(m),m.scale(N,v),v.vadd(u,v),v.distanceTo(f)<t.radius)){if(d)return!0;const G=this.createContactEquation(o,l,t,e,c,h);v.vsub(f,G.ni),G.ni.normalize(),G.ni.scale(t.radius,G.ri),G.ri.vadd(n,G.ri),G.ri.vsub(o.position,G.ri),Wt.pointToWorldFrame(i,r,v,v),v.vsub(l.position,G.rj),Wt.vectorToWorldFrame(r,G.ni,G.ni),Wt.vectorToWorldFrame(r,G.ri,G.ri),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}}const L=U0,I=k0,U=V0,J=L0;for(let C=0,P=y.length;C!==P;C++){e.getTriangleVertices(y[C],L,I,U),e.getNormal(y[C],J),f.vsub(L,v);let z=v.dot(J);if(J.scale(z,v),f.vsub(v,v),z=v.distanceTo(f),ne.pointInTriangle(v,L,I,U)&&z<t.radius){if(d)return!0;let N=this.createContactEquation(o,l,t,e,c,h);v.vsub(f,N.ni),N.ni.normalize(),N.ni.scale(t.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(o.position,N.ri),Wt.pointToWorldFrame(i,r,v,v),v.vsub(l.position,N.rj),Wt.vectorToWorldFrame(r,N.ni,N.ni),Wt.vectorToWorldFrame(r,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}y.length=0}planeTrimesh(t,e,n,i,s,r,o,l,c,h,d){const u=new M,p=A0;p.set(0,0,1),s.vmult(p,p);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);const m=new M;m.copy(u),Wt.pointToWorldFrame(i,r,m,u);const f=T0;if(u.vsub(n,f),p.dot(f)<=0){if(d)return!0;const x=this.createContactEquation(o,l,t,e,c,h);x.ni.copy(p);const _=C0;p.scale(f.dot(p),_),u.vsub(_,_),x.ri.copy(_),x.ri.vsub(o.position,x.ri),x.rj.copy(u),x.rj.vsub(l.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}}const Dn=new M,di=new M,fi=new M,w0=new M,M0=new M,S0=new ie,E0=new ie,A0=new M,T0=new M,C0=new M,L0=new M,P0=new M;new M;const R0=new M,D0=new M,I0=new M,z0=new M,N0=new M,F0=new M,O0=new M,B0=new M,U0=new M,k0=new M,V0=new M,G0=new Le,H0=[],zs=new M,al=new M,W0=new M,q0=new M,X0=new M;function $0(a,t,e){let n=null;const i=a.length;for(let s=0;s!==i;s++){const r=a[s],o=W0;a[(s+1)%i].vsub(r,o);const l=q0;o.cross(t,l);const c=X0;e.vsub(r,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const Ns=new M,Y0=new M,j0=new M,Z0=new M,J0=[new M,new M,new M,new M,new M,new M],K0=new M,Q0=new M,tv=new M,ev=new M,nv=new M,iv=new M,sv=new M,rv=new M,ov=new M,av=new M,lv=new M,cv=new M,hv=new M,uv=new M;new M;new M;const dv=new M,fv=new M,pv=new M,mv=new M,gv=new M,vv=new M,xv=new M,_v=new M,yv=new M,bv=new M,ll=new ie,wv=new M;new M;const Mv=new M,cl=new M,Sv=new M,Ev=new M,Av=new M,Tv=[0],Cv=new M,Lv=new M;class hl{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let r=i.length-1;r>=s;r--)i[r+1]=i[r];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,r=i.length;let o=0;for(let l=0;l<s;l++){let c=!1;const h=n[l];for(;h>i[o];)o++;c=h===i[o],c||ul(t,h)}o=0;for(let l=0;l<r;l++){let c=!1;const h=i[l];for(;h>n[o];)o++;c=n[o]===h,c||ul(e,h)}}}function ul(a,t){a.push((t&4294901760)>>16,t&65535)}const Ur=(a,t)=>a<t?`${a}-${t}`:`${t}-${a}`;class Pv{constructor(){this.data={keys:[]}}get(t,e){const n=Ur(t,e);return this.data[n]}set(t,e,n){const i=Ur(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=Ur(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class Rv extends Zl{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Fg,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new m0,this.constraints=[],this.narrowphase=new b0(this),this.collisionMatrix=new Za,this.collisionMatrixPrevious=new Za,this.bodyOverlapKeeper=new hl,this.shapeOverlapKeeper=new hl,this.contactmaterials=[],this.contactMaterialTable=new Pv,this.defaultMaterial=new os("default"),this.defaultContactMaterial=new rs(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Bs?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=ne.ALL,n.from=t,n.to=e,n.callback=i,kr.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=ne.ANY,n.from=t,n.to=e,n.result=i,kr.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=ne.CLOSEST,n.from=t,n.to=e,n.result=i,kr.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof xt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const r=i[s];if(r.id===t)return r}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=oe.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=oe.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(oe.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const r=this.accumulator/t;for(let o=0;o!==this.bodies.length;o++){const l=this.bodies[o];l.previousPosition.lerp(l.position,r,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,r,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=Fv,i=Ov,s=this.bodies.length,r=this.bodies,o=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=xt.DYNAMIC;let u=-1/0;const p=this.constraints,g=Nv;l.length();const m=l.x,f=l.y,v=l.z;let x=0;for(c&&(u=oe.now()),x=0;x!==s;x++){const C=r[x];if(C.type===d){const P=C.force,z=C.mass;P.x+=z*m,P.y+=z*f,P.z+=z*v}}for(let C=0,P=this.subsystems.length;C!==P;C++)this.subsystems[C].update();c&&(u=oe.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=oe.now()-u);let _=p.length;for(x=0;x!==_;x++){const C=p[x];if(!C.collideConnected)for(let P=n.length-1;P>=0;P-=1)(C.bodyA===n[P]&&C.bodyB===i[P]||C.bodyB===n[P]&&C.bodyA===i[P])&&(n.splice(P,1),i.splice(P,1))}this.collisionMatrixTick(),c&&(u=oe.now());const w=zv,y=e.length;for(x=0;x!==y;x++)w.push(e[x]);e.length=0;const A=this.frictionEquations.length;for(x=0;x!==A;x++)g.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,w,this.frictionEquations,g),c&&(h.narrowphase=oe.now()-u),c&&(u=oe.now()),x=0;x<this.frictionEquations.length;x++)o.addEquation(this.frictionEquations[x]);const D=e.length;for(let C=0;C!==D;C++){const P=e[C],z=P.bi,N=P.bj,Z=P.si,G=P.sj;let X;if(z.material&&N.material?X=this.getContactMaterial(z.material,N.material)||this.defaultContactMaterial:X=this.defaultContactMaterial,X.friction,z.material&&N.material&&(z.material.friction>=0&&N.material.friction>=0&&z.material.friction*N.material.friction,z.material.restitution>=0&&N.material.restitution>=0&&(P.restitution=z.material.restitution*N.material.restitution)),o.addEquation(P),z.allowSleep&&z.type===xt.DYNAMIC&&z.sleepState===xt.SLEEPING&&N.sleepState===xt.AWAKE&&N.type!==xt.STATIC){const et=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),H=N.sleepSpeedLimit**2;et>=H*2&&(z.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===xt.DYNAMIC&&N.sleepState===xt.SLEEPING&&z.sleepState===xt.AWAKE&&z.type!==xt.STATIC){const et=z.velocity.lengthSquared()+z.angularVelocity.lengthSquared(),H=z.sleepSpeedLimit**2;et>=H*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(z,N,!0),this.collisionMatrixPrevious.get(z,N)||(Bi.body=N,Bi.contact=P,z.dispatchEvent(Bi),Bi.body=z,N.dispatchEvent(Bi)),this.bodyOverlapKeeper.set(z.id,N.id),this.shapeOverlapKeeper.set(Z.id,G.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=oe.now()-u,u=oe.now()),x=0;x!==s;x++){const C=r[x];C.wakeUpAfterNarrowphase&&(C.wakeUp(),C.wakeUpAfterNarrowphase=!1)}for(_=p.length,x=0;x!==_;x++){const C=p[x];C.update();for(let P=0,z=C.equations.length;P!==z;P++){const N=C.equations[P];o.addEquation(N)}}o.solve(t,this),c&&(h.solve=oe.now()-u),o.removeAllEquations();const b=Math.pow;for(x=0;x!==s;x++){const C=r[x];if(C.type&d){const P=b(1-C.linearDamping,t),z=C.velocity;z.scale(P,z);const N=C.angularVelocity;if(N){const Z=b(1-C.angularDamping,t);N.scale(Z,N)}}}this.dispatchEvent(Iv),c&&(u=oe.now());const I=this.stepnumber%(this.quatNormalizeSkip+1)===0,U=this.quatNormalizeFast;for(x=0;x!==s;x++)r[x].integrate(t,I,U);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=oe.now()-u),this.stepnumber+=1,this.dispatchEvent(Dv);let J=!0;if(this.allowSleep)for(J=!1,x=0;x!==s;x++){const C=r[x];C.sleepTick(this.time),C.sleepState!==xt.SLEEPING&&(J=!0)}this.hasActiveBodies=J}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(cn,hn),t){for(let s=0,r=cn.length;s<r;s+=2)Ui.bodyA=this.getBodyById(cn[s]),Ui.bodyB=this.getBodyById(cn[s+1]),this.dispatchEvent(Ui);Ui.bodyA=Ui.bodyB=null}if(e){for(let s=0,r=hn.length;s<r;s+=2)ki.bodyA=this.getBodyById(hn[s]),ki.bodyB=this.getBodyById(hn[s+1]),this.dispatchEvent(ki);ki.bodyA=ki.bodyB=null}cn.length=hn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(cn,hn),n){for(let s=0,r=cn.length;s<r;s+=2){const o=this.getShapeById(cn[s]),l=this.getShapeById(cn[s+1]);un.shapeA=o,un.shapeB=l,o&&(un.bodyA=o.body),l&&(un.bodyB=l.body),this.dispatchEvent(un)}un.bodyA=un.bodyB=un.shapeA=un.shapeB=null}if(i){for(let s=0,r=hn.length;s<r;s+=2){const o=this.getShapeById(hn[s]),l=this.getShapeById(hn[s+1]);dn.shapeA=o,dn.shapeB=l,o&&(dn.bodyA=o.body),l&&(dn.bodyB=l.body),this.dispatchEvent(dn)}dn.bodyA=dn.bodyB=dn.shapeA=dn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Le;const kr=new ne,oe=globalThis.performance||{};if(!oe.now){let a=Date.now();oe.timing&&oe.timing.navigationStart&&(a=oe.timing.navigationStart),oe.now=()=>Date.now()-a}new M;const Dv={type:"postStep"},Iv={type:"preStep"},Bi={type:xt.COLLIDE_EVENT_NAME,body:null,contact:null},zv=[],Nv=[],Fv=[],Ov=[],cn=[],hn=[],Ui={type:"beginContact",bodyA:null,bodyB:null},ki={type:"endContact",bodyA:null,bodyB:null},un={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},dn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},qs=new po,Sn={};Sn.createSphere=()=>{Hv(.1,{x:.9,y:3,z:.5})};qs.add(Sn,"createSphere");Sn.createBox=()=>{qv(Math.random(),Math.random(),Math.random(),{x:(Math.random()-.5)*3,y:3,z:(Math.random()-.5)*3})};qs.add(Sn,"createBox");Sn.createCurve=()=>{ac()};qs.add(Sn,"createCurve");Sn.reset=()=>{for(const a of yi)a.body.removeEventListener("collide",xo),Ke.removeBody(a.body),gn.remove(a.mesh);yi.splice(0,yi.length)};qs.add(Sn,"reset");const rc=document.querySelector("canvas.webgl"),gn=new hm,Vr=new Audio("/sounds/hit.mp3"),xo=a=>{a.contact.getImpactVelocityAlongNormal()>1.5&&(Vr.volume=Math.random(),Vr.currentTime=0,Vr.play())};new Wm;const Bv=new Hm,_o=Bv.load(["/textures/environmentMaps/0/px.png","/textures/environmentMaps/0/nx.png","/textures/environmentMaps/0/py.png","/textures/environmentMaps/0/ny.png","/textures/environmentMaps/0/pz.png","/textures/environmentMaps/0/nz.png"]),Ke=new Rv;Ke.broadphase=new vi(Ke);Ke.allowSleep=!0;Ke.gravity.set(0,-9.82,0);const Us=new os("default"),Uv=new rs(Us,Us,{friction:.1,restitution:.7});Ke.defaultContactMaterial=Uv;const kv=new f0,Xs=new xt;Xs.mass=0;Xs.addShape(kv);Xs.quaternion.setFromAxisAngle(new M(-1,0,0),Math.PI*.5);Ke.addBody(Xs);const yi=[],Vv=new ho(1,20,20),Gv=new uo({metalness:.3,roughness:.4,envMap:_o,envMapIntensity:.5}),Hv=(a,t)=>{const e=new ze(Vv,Gv);e.castShadow=!0,e.scale.set(a,a,a),e.position.copy(t),gn.add(e);const n=new d0(a),i=new xt({mass:1,position:new M(0,3,0),shape:n,material:Us});i.position.copy(t),i.addEventListener("collide",xo),Ke.addBody(i),yi.push({mesh:e,body:i})},Wv=new Ti(1,1,1),oc=new uo({metalness:.3,roughness:.4,envMap:_o,envMapIntensity:.5}),qv=(a,t,e,n)=>{const i=new ze(Wv,oc);i.scale.set(a,t,e),i.castShadow=!0,i.position.copy(n),gn.add(i);const s=new Ws(new M(a*.5,t*.5,e*.5)),r=new xt({mass:1,position:new M(0,3,0),shape:s,material:Us});r.position.copy(n),r.addEventListener("collide",xo),Ke.addBody(r),yi.push({mesh:i,body:r})},ac=(a,t,e,n)=>{var i=new O(-1,0,0),s=new O(-1,1,0),r=new O(1,1,0),o=new O(1,0,0),l=new O(0,-1,0),c=new Zr(i,s,l,r),h=new Zr(r,l,o,i),d=new Hl;d.add(c),d.add(h);var u=new Wl;u.moveTo(i.x,i.y),u.bezierCurveTo(s.x,s.y,l.x,l.y,r.x,r.y),u.bezierCurveTo(l.x,l.y,o.x,o.y,i.x,i.y);var p={steps:1,depth:1,bevelEnabled:!1},g=new Zm(u,p),m=new ze(g,oc);gn.add(m)};ac();const yo=new ze(new Vs(10,10),new uo({color:"#777777",metalness:.3,roughness:.4,envMap:_o,envMapIntensity:.5}));yo.receiveShadow=!0;yo.rotation.x=-Math.PI*.5;gn.add(yo);const Xv=new Ym(16777215,.7);gn.add(Xv);const vn=new $m(16777215,.2);vn.castShadow=!0;vn.shadow.mapSize.set(1024,1024);vn.shadow.camera.far=15;vn.shadow.camera.left=-7;vn.shadow.camera.top=7;vn.shadow.camera.right=7;vn.shadow.camera.bottom=-7;vn.position.set(5,5,5);gn.add(vn);const je={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{je.width=window.innerWidth,je.height=window.innerHeight,Ei.aspect=je.width/je.height,Ei.updateProjectionMatrix(),Yn.setSize(je.width,je.height),Yn.setPixelRatio(Math.min(window.devicePixelRatio,2))});const Ei=new Ie(75,je.width/je.height,.1,100);Ei.position.set(-3,3,3);gn.add(Ei);const lc=new Jm(Ei,rc);lc.enableDamping=!0;const Yn=new Bl({canvas:rc});Yn.shadowMap.enabled=!0;Yn.shadowMap.type=pl;Yn.setSize(je.width,je.height);Yn.setPixelRatio(Math.min(window.devicePixelRatio,2));const $v=new jm;let dl=0;const cc=()=>{const a=$v.getElapsedTime(),t=a-dl;dl=a,Ke.step(1/60,t,3);for(const e of yi)e.mesh.position.copy(e.body.position),e.mesh.quaternion.copy(e.body.quaternion);lc.update(),Yn.render(gn,Ei),window.requestAnimationFrame(cc)};cc();
//# sourceMappingURL=index-7a39dd77.js.map
