import { Role } from './'

export function configureFakeBackend() {
    // array in local storage for user records
    let users = JSON.parse(localStorage.getItem('users')) || [

        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "221   ", "surveryno": "443       ", "subdivision": "5         ", "owner_nametext": "கேசவக்கவுண்டர்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Nadukuppam East" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "201   ", "surveryno": "308       ", "subdivision": "14B       ", "owner_nametext": "கிருஷ்ணப்பிள்ளை", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kanthadu (west)" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "211   ", "surveryno": "36        ", "subdivision": "4         ", "owner_nametext": "சிவப்பிரகாசம்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kezhpettai" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "148   ", "surveryno": "65        ", "subdivision": "10        ", "owner_nametext": "திரு\/திருமதி மைனர் சுரேஷ் கார்டியன் தாய் அகிலாண்டம்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kezhsiviri" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "149   ", "surveryno": "87        ", "subdivision": "9B        ", "owner_nametext": "தெ இருதயசாமிY", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "T.nallalam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "202   ", "surveryno": "65        ", "subdivision": "4         ", "owner_nametext": "சின்னத்தம்பி கவுண்டர்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Adasal" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "209   ", "surveryno": "504       ", "subdivision": "1         ", "owner_nametext": "திரு\/திருமதி உமா பார்வதிY", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kanthadu (east)" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "212   ", "surveryno": "133       ", "subdivision": "10        ", "owner_nametext": "தயாள கவுண்டர்Y", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Anumanthai" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "236   ", "surveryno": "55        ", "subdivision": "11        ", "owner_nametext": "திரு\/திருமதி காளிதாஸ்,ராகவப்பிள்ளை", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Brammadesam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "189   ", "surveryno": "14        ", "subdivision": "6         ", "owner_nametext": "பொ  சண்முககவுண்டர்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Rayanallur" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "212   ", "surveryno": "132       ", "subdivision": "7         ", "owner_nametext": "சாமிகண்ணு", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Anumanthai" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "148   ", "surveryno": "101       ", "subdivision": "8         ", "owner_nametext": "திரு\/திருமதி பிரபு ரதன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kezhsiviri" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "184   ", "surveryno": "99        ", "subdivision": "4         ", "owner_nametext": "சொக்கம்மாள்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vadanerkunam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "225   ", "surveryno": "102       ", "subdivision": "4         ", "owner_nametext": "சு. வரதம்மாள்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Keezhputhupattu" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "223   ", "surveryno": "28        ", "subdivision": "18        ", "owner_nametext": "ஆனந்தன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Chettikuppam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "189   ", "surveryno": "66        ", "subdivision": "3         ", "owner_nametext": "திரு\/திருமதி கா அய்யாசாமிகவுண்டர்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Rayanallur" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "219   ", "surveryno": "62        ", "subdivision": "8         ", "owner_nametext": "முனுசாமிகவுண்டர்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Thirukanoor" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "197   ", "surveryno": "51        ", "subdivision": "1A        ", "owner_nametext": "புண்ணியகோட்டி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Omiper" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "151   ", "surveryno": "40        ", "subdivision": "10        ", "owner_nametext": "திரு\/திருமதி கணபதி(எ)கணேசன்,ஜானகி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vanniper" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "224   ", "surveryno": "224       ", "subdivision": "7         ", "owner_nametext": "முஹம்மது ஹாஷிம்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Koonimedu" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "151   ", "surveryno": "93        ", "subdivision": "8         ", "owner_nametext": "திரு\/திருமதி மணி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vanniper" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "211   ", "surveryno": "7         ", "subdivision": "15        ", "owner_nametext": "வெங்கிடேசகவுண்டர்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kezhpettai" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "207   ", "surveryno": "26        ", "subdivision": "3         ", "owner_nametext": "ராஜதுரை", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Asappoor" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "211   ", "surveryno": "7         ", "subdivision": "3         ", "owner_nametext": "குருசாமி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kezhpettai" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "191   ", "surveryno": "137       ", "subdivision": "15        ", "owner_nametext": "பத்துலாபி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vaidappakkam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "151   ", "surveryno": "47        ", "subdivision": "7         ", "owner_nametext": "திரு\/திருமதி ராஜூ", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vanniper" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "236   ", "surveryno": "216       ", "subdivision": "1         ", "owner_nametext": "திரு\/திருமதி சுஜாதா", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Brammadesam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "189   ", "surveryno": "103       ", "subdivision": "3         ", "owner_nametext": "தி யசோதையம்மாள்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Rayanallur" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "151   ", "surveryno": "169       ", "subdivision": "6         ", "owner_nametext": "கண்ணக்கவுண்டர்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vanniper" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "998   ", "surveryno": "380       ", "subdivision": "4         ", "owner_nametext": "திரு\/திருமதி அய்யப்பன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Marakanam South" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "236   ", "surveryno": "16        ", "subdivision": "10        ", "owner_nametext": "திரு\/திருமதி ஏகாம்பரம்,நடராஜன்,பாலகிருஷ்ணன்,முருகேசன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Brammadesam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "189   ", "surveryno": "23        ", "subdivision": "5         ", "owner_nametext": "திரு\/திருமதி கணபதிகவுண்டர்,பார்த்தசாரதிகவுண்டர்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Rayanallur" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "199   ", "surveryno": "3         ", "subdivision": "3A        ", "owner_nametext": "திரு\/திருமதி சிவப்பிரகாசம்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Sorapattu" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "151   ", "surveryno": "121       ", "subdivision": "4         ", "owner_nametext": "திரு\/திருமதி பூமிநாதன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vanniper" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "151   ", "surveryno": "105       ", "subdivision": "9B        ", "owner_nametext": "திரு\/திருமதி சக்திவேலாயுதம்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vanniper" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "146   ", "surveryno": "69        ", "subdivision": "2         ", "owner_nametext": "திரு\/திருமதி கணேசன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Pazhamukkal" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "190   ", "surveryno": "26        ", "subdivision": "7         ", "owner_nametext": "-----", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Nagar" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "213   ", "surveryno": "1         ", "subdivision": "15        ", "owner_nametext": "பூமிநாதன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Panichamedu" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "217   ", "surveryno": "12        ", "subdivision": "11A       ", "owner_nametext": "கோபால்Y", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vadaagaram" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "151   ", "surveryno": "250       ", "subdivision": "3         ", "owner_nametext": "தேவராசு", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vanniper" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "236   ", "surveryno": "220       ", "subdivision": "5         ", "owner_nametext": "திரு\/திருமதி குமாரக்கிருஷ்ணன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Brammadesam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "216   ", "surveryno": "80        ", "subdivision": "4         ", "owner_nametext": "து. கோவிந்தராசு நாயுடு", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Oorani" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "200   ", "surveryno": "94        ", "subdivision": "3         ", "owner_nametext": "நீலாவதியம்மாள்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Adavallikoothan" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "202   ", "surveryno": "73        ", "subdivision": "3         ", "owner_nametext": "கோவிந்தசாமி செட்டியார்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Adasal" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "211   ", "surveryno": "6         ", "subdivision": "8         ", "owner_nametext": "திரு\/திருமதி சூசைமாணிக்கம்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kezhpettai" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "211   ", "surveryno": "36        ", "subdivision": "9         ", "owner_nametext": "திரு\/திருமதி சிவப்பிரகாசம்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kezhpettai" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "222   ", "surveryno": "22        ", "subdivision": "7B1       ", "owner_nametext": "பெருமாள்கவுண்டர்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Seiyangkuppam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "211   ", "surveryno": "3         ", "subdivision": "7         ", "owner_nametext": "சோமசுந்தரம்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kezhpettai" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "193   ", "surveryno": "192       ", "subdivision": "3B        ", "owner_nametext": "ஜெயக்குமார்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Aalangkupam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "151   ", "surveryno": "45        ", "subdivision": "3         ", "owner_nametext": "குமார்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vanniper" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "151   ", "surveryno": "179       ", "subdivision": "1         ", "owner_nametext": "திரு\/திருமதி ஜெயராமன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vanniper" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "217   ", "surveryno": "5         ", "subdivision": "5B        ", "owner_nametext": "ரத்தினவேல்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vadaagaram" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "212   ", "surveryno": "67        ", "subdivision": "11        ", "owner_nametext": "சுப்பராயன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Anumanthai" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "216   ", "surveryno": "89        ", "subdivision": "10        ", "owner_nametext": "கிஷ்டப்ப நாயுடு", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Oorani" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "236   ", "surveryno": "220       ", "subdivision": "3         ", "owner_nametext": "திரு\/திருமதி 1.ஸ்ரீதர் 2.  ரமேஷ்Y", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Brammadesam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "236   ", "surveryno": "200       ", "subdivision": "6         ", "owner_nametext": "திரு\/திருமதி சுப்பரமணிய நாயுடு", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Brammadesam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "216   ", "surveryno": "39        ", "subdivision": "1A        ", "owner_nametext": "சத்தியவாணி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Oorani" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "961   ", "surveryno": "12        ", "subdivision": "7         ", "owner_nametext": "பாலு", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vadakolappakkam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "998   ", "surveryno": "372       ", "subdivision": "9         ", "owner_nametext": "திரு\/திருமதி அமிர்தம்,சௌரியப்பன்,தோமாஸ்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Marakanam South" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "197   ", "surveryno": "115       ", "subdivision": "11        ", "owner_nametext": "மஞ்சினி கவுண்டர்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Omiper" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "201   ", "surveryno": "308       ", "subdivision": "6G        ", "owner_nametext": "பாலகிருஷ்ணன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kanthadu (west)" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "209   ", "surveryno": "497       ", "subdivision": "10        ", "owner_nametext": "ரத்தின வசந்தன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kanthadu (east)" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "189   ", "surveryno": "45        ", "subdivision": "7         ", "owner_nametext": "திரு\/திருமதி பொ. சண்முக கவுண்டர்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Rayanallur" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "236   ", "surveryno": "22        ", "subdivision": "11        ", "owner_nametext": "திரு\/திருமதி மதுரை நாயகம்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Brammadesam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "212   ", "surveryno": "70        ", "subdivision": "10B       ", "owner_nametext": "சீதாகவுண்டர்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Anumanthai" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "236   ", "surveryno": "197       ", "subdivision": "3         ", "owner_nametext": "திரு\/திருமதி ரமேஷ்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Brammadesam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "206   ", "surveryno": "177       ", "subdivision": "3         ", "owner_nametext": "விஸ்வநாதன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Aalathoor" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "202   ", "surveryno": "67        ", "subdivision": "9         ", "owner_nametext": "ஜானகிராமன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Adasal" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "151   ", "surveryno": "41        ", "subdivision": "17        ", "owner_nametext": "குப்பம்மாள்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vanniper" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "147   ", "surveryno": "13        ", "subdivision": "12        ", "owner_nametext": "திரு\/திருமதி பச்சையப்பன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Theneri" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "148   ", "surveryno": "73        ", "subdivision": "5         ", "owner_nametext": "திரு\/திருமதி பெரியண்ணக் கவுண்டர்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kezhsiviri" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "998   ", "surveryno": "331       ", "subdivision": "2         ", "owner_nametext": "திரு\/திருமதி மணி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Marakanam South" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "209   ", "surveryno": "442       ", "subdivision": "8         ", "owner_nametext": "திரு\/திருமதி அம்பிகா", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kanthadu (east)" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "149   ", "surveryno": "71        ", "subdivision": "5         ", "owner_nametext": "திரு\/திருமதி தாஸ்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "T.nallalam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "234   ", "surveryno": "386       ", "subdivision": "17        ", "owner_nametext": "திரு\/திருமதி கங்கா துரை", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Munnur South" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "210   ", "surveryno": "152       ", "subdivision": "16        ", "owner_nametext": "செங்கல்வராயசெட்டியார்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Marakkanam (north)" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "148   ", "surveryno": "15        ", "subdivision": "12        ", "owner_nametext": "திரு\/திருமதி கணேசக்கவுண்டர்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kezhsiviri" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "151   ", "surveryno": "210       ", "subdivision": "5         ", "owner_nametext": "ருத்ரிவீரகவுண்டர்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vanniper" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "151   ", "surveryno": "149       ", "subdivision": "6         ", "owner_nametext": "திரு\/திருமதி வீரப்பன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vanniper" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "151   ", "surveryno": "108       ", "subdivision": "14B       ", "owner_nametext": "திரு\/திருமதி கலா,சிவானந்தம்,சுகுணா,முனியம்மாள்,ராஜசேகர்,ராஜேந்திரன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vanniper" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "198   ", "surveryno": "208       ", "subdivision": "1         ", "owner_nametext": "திரு\/திருமதி காத்தவராயன்,செல்வகணபதி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Munnur North" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "190   ", "surveryno": "1         ", "subdivision": "6         ", "owner_nametext": "சங்கர்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Nagar" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "225   ", "surveryno": "81        ", "subdivision": "3         ", "owner_nametext": "நாராயணன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Keezhputhupattu" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "205   ", "surveryno": "75        ", "subdivision": "5         ", "owner_nametext": "பெருமாள்ரெட்டியார்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vadakodippakkam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "212   ", "surveryno": "135       ", "subdivision": "6B        ", "owner_nametext": "ராஜேந்திரன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Anumanthai" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "236   ", "surveryno": "114       ", "subdivision": "13        ", "owner_nametext": "திரு\/திருமதி இராமு நாயுடு", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Brammadesam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "224   ", "surveryno": "257       ", "subdivision": "14        ", "owner_nametext": "சபராபீ", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Koonimedu" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "184   ", "surveryno": "8         ", "subdivision": "3         ", "owner_nametext": "திரு\/திருமதி ஸ்ரீ ராமுலு நாயடு", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vadanerkunam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "217   ", "surveryno": "5         ", "subdivision": "7         ", "owner_nametext": "ஜெயபால்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vadaagaram" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "998   ", "surveryno": "395       ", "subdivision": "7         ", "owner_nametext": "திரு\/திருமதி கண்ணப்பன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Marakanam South" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "211   ", "surveryno": "7         ", "subdivision": "10        ", "owner_nametext": "திரு\/திருமதி ஏழுமலை", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kezhpettai" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "148   ", "surveryno": "97        ", "subdivision": "16        ", "owner_nametext": "திரு\/திருமதி தாண்டவராயன்,பாஸ்கரன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kezhsiviri" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "190   ", "surveryno": "185       ", "subdivision": "1         ", "owner_nametext": "திரு\/திருமதி கணேசன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Nagar" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "921   ", "surveryno": "300       ", "subdivision": "11B       ", "owner_nametext": "ஏழுமலைY", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Nadukuppam West" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "216   ", "surveryno": "39        ", "subdivision": "1B        ", "owner_nametext": "சத்தியவாணி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Oorani" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "152   ", "surveryno": "76        ", "subdivision": "4         ", "owner_nametext": "கதிரவன்,கார்த்திக்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Enthoor" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "198   ", "surveryno": "346       ", "subdivision": "10        ", "owner_nametext": "சீனுவாசன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Munnur North" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "202   ", "surveryno": "61        ", "subdivision": "3         ", "owner_nametext": "திரு\/திருமதி ஏழுமலை", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Adasal" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "209   ", "surveryno": "405       ", "subdivision": "6         ", "owner_nametext": "திரு\/திருமதி பரசுராமன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kanthadu (east)" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "209   ", "surveryno": "454       ", "subdivision": "4         ", "owner_nametext": "திரு\/திருமதி கிருஷ்ணமுதலியார்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kanthadu (east)" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "152   ", "surveryno": "88        ", "subdivision": "7         ", "owner_nametext": "திரு\/திருமதி அமராவதி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Enthoor" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "961   ", "surveryno": "12        ", "subdivision": "5         ", "owner_nametext": "வெங்கடபெருமாள்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vadakolappakkam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "204   ", "surveryno": "194       ", "subdivision": "1         ", "owner_nametext": "சாந்தாக்அம்மாள்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Siruvadi" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "212   ", "surveryno": "134       ", "subdivision": "2C        ", "owner_nametext": "ராஜேந்திரன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Anumanthai" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "206   ", "surveryno": "113       ", "subdivision": "7A        ", "owner_nametext": "பாலசுந்தரம்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Aalathoor" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "208   ", "surveryno": "120       ", "subdivision": "13        ", "owner_nametext": "மகாதேவி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kurumparam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "236   ", "surveryno": "214       ", "subdivision": "4         ", "owner_nametext": "திரு\/திருமதி வெங்கிடேசன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Brammadesam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "217   ", "surveryno": "12        ", "subdivision": "8A        ", "owner_nametext": "சுகுமார்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vadaagaram" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "236   ", "surveryno": "192       ", "subdivision": "5         ", "owner_nametext": "ஜோன்மாலினி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Brammadesam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "211   ", "surveryno": "18        ", "subdivision": "2         ", "owner_nametext": "திரு\/திருமதி கோபால்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kezhpettai" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "151   ", "surveryno": "19        ", "subdivision": "12B       ", "owner_nametext": "திரு\/திருமதி ராமுபிள்ளை", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vanniper" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "201   ", "surveryno": "308       ", "subdivision": "2A        ", "owner_nametext": "பூபேந்திராபால்சிங்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kanthadu (west)" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "236   ", "surveryno": "55        ", "subdivision": "8         ", "owner_nametext": "திரு\/திருமதி ராகவப்பிள்ளை", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Brammadesam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "221   ", "surveryno": "342       ", "subdivision": "4         ", "owner_nametext": "கோதண்டராமன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Nadukuppam East" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "149   ", "surveryno": "69        ", "subdivision": "15        ", "owner_nametext": "திரு\/திருமதி கோபால்கவுண்டர்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "T.nallalam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "212   ", "surveryno": "143       ", "subdivision": "5         ", "owner_nametext": "கன்னியப்பன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Anumanthai" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "211   ", "surveryno": "16        ", "subdivision": "13        ", "owner_nametext": "திரு\/திருமதி நாராயணசாமி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kezhpettai" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "224   ", "surveryno": "87        ", "subdivision": "6B        ", "owner_nametext": "அப்துல்ரஜித்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Koonimedu" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "204   ", "surveryno": "109       ", "subdivision": "2         ", "owner_nametext": "செல்லப்ப கவுண்டர்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Siruvadi" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "217   ", "surveryno": "12        ", "subdivision": "9A        ", "owner_nametext": "சுகுமார்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vadaagaram" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "145   ", "surveryno": "111       ", "subdivision": "15        ", "owner_nametext": "ச சீனுவாசப்பிள்ளை", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Perumukkal" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "236   ", "surveryno": "182       ", "subdivision": "5         ", "owner_nametext": "வினோத்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Brammadesam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "202   ", "surveryno": "68        ", "subdivision": "10        ", "owner_nametext": "திரு\/திருமதி சிரஞ்வி கவுண்டர்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Adasal" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "188   ", "surveryno": "70        ", "subdivision": "16        ", "owner_nametext": "திரு\/திருமதி ஆறுமுகம்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Nagalpakkam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "219   ", "surveryno": "62        ", "subdivision": "5         ", "owner_nametext": "நடேசக் கவுண்டர்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Thirukanoor" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "912   ", "surveryno": "53        ", "subdivision": "6A        ", "owner_nametext": "கோவிந்தசாமி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Aatchikadu" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "189   ", "surveryno": "46        ", "subdivision": "10        ", "owner_nametext": "திரு\/திருமதி குமாரசாமி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Rayanallur" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "993   ", "surveryno": "62        ", "subdivision": "17        ", "owner_nametext": "பாரதி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Madavanthangal" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "234   ", "surveryno": "37        ", "subdivision": "12        ", "owner_nametext": "திரு\/திருமதி ஜெயலட்சுமி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Munnur South" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "190   ", "surveryno": "40        ", "subdivision": "2A        ", "owner_nametext": "கண்ணதாசன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Nagar" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "151   ", "surveryno": "239       ", "subdivision": "3A        ", "owner_nametext": "பெருமாள்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vanniper" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "202   ", "surveryno": "66        ", "subdivision": "12A       ", "owner_nametext": "ஆறுமுகம் கவுண்டர்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Adasal" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "151   ", "surveryno": "214       ", "subdivision": "4         ", "owner_nametext": "திரு\/திருமதி தாமோதரன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vanniper" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "190   ", "surveryno": "23        ", "subdivision": "4         ", "owner_nametext": "கு.குப்புசாமி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Nagar" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "151   ", "surveryno": "241       ", "subdivision": "8         ", "owner_nametext": "திரு\/திருமதி முருகேசன்,ராமமூர்த்தி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vanniper" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "151   ", "surveryno": "92        ", "subdivision": "11B       ", "owner_nametext": "திரு\/திருமதி குமாரசாமி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vanniper" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "218   ", "surveryno": "46        ", "subdivision": "8         ", "owner_nametext": "சகாதேவகிராமணி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "M.puthuppakkam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "205   ", "surveryno": "82        ", "subdivision": "10        ", "owner_nametext": "திருமலைதாஸ்ரெட்டி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vadakodippakkam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "189   ", "surveryno": "29        ", "subdivision": "5         ", "owner_nametext": "திரு\/திருமதி பிரபாகரன்,முருகன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Rayanallur" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "223   ", "surveryno": "75        ", "subdivision": "6A        ", "owner_nametext": "வீரப்பக்கவுண்டர்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Chettikuppam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "224   ", "surveryno": "52        ", "subdivision": "5A2       ", "owner_nametext": "சங்கீதா", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Koonimedu" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "220   ", "surveryno": "6         ", "subdivision": "2B        ", "owner_nametext": "சீனு", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kesavanayakanpalayam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "224   ", "surveryno": "66        ", "subdivision": "3B2       ", "owner_nametext": "பிரபுதிலக்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Koonimedu" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "208   ", "surveryno": "144       ", "subdivision": "3         ", "owner_nametext": "தேவராஜ்கவுண்டர்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kurumparam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "211   ", "surveryno": "7         ", "subdivision": "1B        ", "owner_nametext": "கன்னியப்பன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kezhpettai" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "200   ", "surveryno": "95        ", "subdivision": "14        ", "owner_nametext": "திரு\/திருமதி தம்புசாமி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Adavallikoothan" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "184   ", "surveryno": "121       ", "subdivision": "1A1       ", "owner_nametext": "ஏழுமலை", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vadanerkunam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "209   ", "surveryno": "503       ", "subdivision": "4A        ", "owner_nametext": "உமா பார்வதி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kanthadu (east)" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "198   ", "surveryno": "3         ", "subdivision": "1         ", "owner_nametext": "சேகர்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Munnur North" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "212   ", "surveryno": "118       ", "subdivision": "12        ", "owner_nametext": "பாண்டுரங்கன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Anumanthai" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "190   ", "surveryno": "40        ", "subdivision": "1A        ", "owner_nametext": "வேணுப்பிள்ளை", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Nagar" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "157   ", "surveryno": "59        ", "subdivision": "5         ", "owner_nametext": "சம்பத்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Nalmukkal" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "189   ", "surveryno": "32        ", "subdivision": "10        ", "owner_nametext": "திரு\/திருமதி ஆறுமூகம்,கணேசன்,காசி,செல்வமணி,விஜி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Rayanallur" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "190   ", "surveryno": "18        ", "subdivision": "4         ", "owner_nametext": "சீத்தாராமன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Nagar" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "210   ", "surveryno": "234       ", "subdivision": "12        ", "owner_nametext": "சுதீர்ஷேட்டே", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Marakkanam (north)" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "212   ", "surveryno": "70        ", "subdivision": "5B        ", "owner_nametext": "ஜனார்த்தனம்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Anumanthai" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "151   ", "surveryno": "59        ", "subdivision": "4         ", "owner_nametext": "திரு\/திருமதி வேணுகோபால்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vanniper" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "198   ", "surveryno": "269       ", "subdivision": "1         ", "owner_nametext": "திரு\/திருமதி சீனுவாசக் கவுண்டர்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Munnur North" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "145   ", "surveryno": "131       ", "subdivision": "12        ", "owner_nametext": "திரு\/திருமதி கோ கிருஷ்ண பண்டிதர்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Perumukkal" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "197   ", "surveryno": "52        ", "subdivision": "3B        ", "owner_nametext": "ஆறுமுகம்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Omiper" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "208   ", "surveryno": "142       ", "subdivision": "6         ", "owner_nametext": "திருவேங்கிடகவுண்டர்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kurumparam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "213   ", "surveryno": "2         ", "subdivision": "14        ", "owner_nametext": "முனுசாமி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Panichamedu" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "220   ", "surveryno": "6         ", "subdivision": "4         ", "owner_nametext": "பெருமாள் கிராமணி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kesavanayakanpalayam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "148   ", "surveryno": "16        ", "subdivision": "6B        ", "owner_nametext": "திரு\/திருமதி அரிபுத்திரிக் கவுண்டர்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kezhsiviri" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "912   ", "surveryno": "76        ", "subdivision": "2         ", "owner_nametext": "சந்திரமோகன்Y", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Aatchikadu" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "222   ", "surveryno": "22        ", "subdivision": "13        ", "owner_nametext": "செய்யாலுகவுண்டர்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Seiyangkuppam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "151   ", "surveryno": "181       ", "subdivision": "5         ", "owner_nametext": "திரு\/திருமதி சுரியமூர்த்தி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vanniper" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "236   ", "surveryno": "16        ", "subdivision": "5         ", "owner_nametext": "திரு\/திருமதி அர்ஜணன்Y,மோகன்தாஸ்Y", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Brammadesam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "216   ", "surveryno": "14        ", "subdivision": "2         ", "owner_nametext": "ராஜேந்திரன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Oorani" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "201   ", "surveryno": "367       ", "subdivision": "4         ", "owner_nametext": "திரு\/திருமதி மாலதி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kanthadu (west)" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "148   ", "surveryno": "4         ", "subdivision": "4C        ", "owner_nametext": "திரு\/திருமதி செல்வராஜ்Y", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kezhsiviri" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "213   ", "surveryno": "21        ", "subdivision": "5D4       ", "owner_nametext": "சித்ரா", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Panichamedu" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "213   ", "surveryno": "16        ", "subdivision": "13        ", "owner_nametext": "திரு\/திருமதி கோபால்சாமிராஜா", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Panichamedu" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "186   ", "surveryno": "48        ", "subdivision": "2         ", "owner_nametext": "சாமிநாதன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Nalloor" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "236   ", "surveryno": "217       ", "subdivision": "3         ", "owner_nametext": "திரு\/திருமதி பத்மநாபரெட்டி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Brammadesam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "187   ", "surveryno": "54        ", "subdivision": "1C1A      ", "owner_nametext": "சக்கரபாணி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Panthadu" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "151   ", "surveryno": "76        ", "subdivision": "22        ", "owner_nametext": "திரு\/திருமதி தேவராஜ்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vanniper" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "151   ", "surveryno": "31        ", "subdivision": "4         ", "owner_nametext": "உத்திரம்மாள்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vanniper" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "147   ", "surveryno": "13        ", "subdivision": "3         ", "owner_nametext": "திரு\/திருமதி அமுதாY,சர்குணாY,ரீத்தாY,வெங்கடேஸ்வரிY", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Theneri" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "210   ", "surveryno": "60        ", "subdivision": "3         ", "owner_nametext": "உஷா", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Marakkanam (north)" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "218   ", "surveryno": "25        ", "subdivision": "16A       ", "owner_nametext": "மஞ்சினி கவுண்டர்Y", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "M.puthuppakkam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "151   ", "surveryno": "181       ", "subdivision": "10        ", "owner_nametext": "திரு\/திருமதி அர்ச்சுணன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vanniper" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "236   ", "surveryno": "177       ", "subdivision": "4         ", "owner_nametext": "திரு\/திருமதி பலராமன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Brammadesam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "198   ", "surveryno": "205       ", "subdivision": "3         ", "owner_nametext": "திரு\/திருமதி மகாலட்சுமி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Munnur North" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "200   ", "surveryno": "53        ", "subdivision": "20        ", "owner_nametext": "திரு\/திருமதி ஜெயராமன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Adavallikoothan" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "224   ", "surveryno": "345       ", "subdivision": "2A1       ", "owner_nametext": "நிசார்அலி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Koonimedu" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "201   ", "surveryno": "308       ", "subdivision": "6F        ", "owner_nametext": "பாமினிட்டிநரசிம்கான்சேஷாதிரி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kanthadu (west)" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "212   ", "surveryno": "138       ", "subdivision": "12        ", "owner_nametext": "ராமமூர்த்தி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Anumanthai" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "147   ", "surveryno": "24        ", "subdivision": "2C        ", "owner_nametext": "திரு\/திருமதி ராஜகோபால்Y", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Theneri" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "236   ", "surveryno": "28        ", "subdivision": "8         ", "owner_nametext": "திரு\/திருமதி காளிதாஸ்Y", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Brammadesam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "198   ", "surveryno": "346       ", "subdivision": "7         ", "owner_nametext": "வேணு", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Munnur North" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "213   ", "surveryno": "8         ", "subdivision": "2         ", "owner_nametext": "திரு\/திருமதி லட்சுமிபதி", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Panichamedu" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "212   ", "surveryno": "70        ", "subdivision": "10A       ", "owner_nametext": "ஜெயசந்திரன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Anumanthai" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "212   ", "surveryno": "133       ", "subdivision": "14A       ", "owner_nametext": "யோகநாதன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Anumanthai" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "236   ", "surveryno": "205       ", "subdivision": "2         ", "owner_nametext": "திரு\/திருமதி ராஜிவியம்மாள்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Brammadesam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "216   ", "surveryno": "14        ", "subdivision": "8         ", "owner_nametext": "முருவன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Oorani" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "191   ", "surveryno": "39        ", "subdivision": "1         ", "owner_nametext": "திரு\/திருமதி சங்கர்,சந்திரன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Vaidappakkam" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "211   ", "surveryno": "3         ", "subdivision": "8         ", "owner_nametext": "குருநாதன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Kezhpettai" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "204   ", "surveryno": "120       ", "subdivision": "5         ", "owner_nametext": "எஸ்.ஏ.பிஸ்மில்லா", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "Siruvadi" },
        { "district_code": "07    ", "taluk_code": "11    ", "village_code": "149   ", "surveryno": "95        ", "subdivision": "4         ", "owner_nametext": "திரு\/திருமதி மோகன்", "district_name": "Viluppuram", "taluk_name": "Marakkanam", "village_name": "T.nallalam" }

];

    // monkey patch fetch to setup fake backend
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(handleRoute, 500);

            function handleRoute() {
                const { method } = opts;
                switch (true) {
                    case url.endsWith('/users') && method === 'GET':
                        return getUsers();
                    case url.match(/\/users\/\d+$/) && method === 'GET':
                        return getUserById();
                    case url.endsWith('/users') && method === 'POST':
                        return createUser();
                    case url.match(/\/users\/\d+$/) && method === 'PUT':
                        return updateUser();
                    case url.match(/\/users\/\d+$/) && method === 'DELETE':
                        return deleteUser();
                    default:
                        // pass through any requests not handled above
                        return realFetch(url, opts)
                            .then(response => resolve(response))
                            .catch(error => reject(error));
                }
            }

            // route functions

            function getUsers() {
                return ok(users);
            }

            function getUserById() {
                let user = users.find(x => x.id === idFromUrl());
                return ok(user);
            }
    
            function createUser() {
                const user = body();

                if (users.find(x => x.email === user.email)) {
                    return error(`User with the email ${user.email} already exists`);
                }

                // assign user id and a few other properties then save
                user.id = newUserId();
                user.dateCreated = new Date().toISOString();
                delete user.confirmPassword;
                users.push(user);
                localStorage.setItem('users', JSON.stringify(users));

                return ok();
            }
    
            function updateUser() {
                let params = body();
                let user = users.find(x => x.id === idFromUrl());

                // only update password if included
                if (!params.password) {
                    delete params.password;
                }
                // don't save confirm password
                delete params.confirmPassword;

                // update and save user
                Object.assign(user, params);
                localStorage.setItem('users', JSON.stringify(users));

                return ok();
            }
    
            function deleteUser() {
                users = users.filter(x => x.id !== idFromUrl());
                localStorage.setItem('users', JSON.stringify(users));

                return ok();
            }
    
            // helper functions

            function ok(body) {
                resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) });
            }

            function error(message) {
                resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) });
            }

            function idFromUrl() {
                const urlParts = url.split('/');
                return parseInt(urlParts[urlParts.length - 1]);
            }

            function body() {
                return opts.body && JSON.parse(opts.body);    
            }

            function newUserId() {
                return users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
            }
        });
    }
};