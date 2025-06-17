import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  places = [
    {
      id: 1,
      images: [
        'assets/moxaliseoba/karmir_averatani/1.jpg',
        'assets/moxaliseoba/karmir_averatani/2.jpg',
        'assets/moxaliseoba/karmir_averatani/4.jpg',
        'assets/moxaliseoba/karmir_averatani/5.jpg'
      ],
      text: 'კარმირ ავეტარანი (სომხ. Կարմիր Ավետարան) – ითარგმნება როგორც „წითელი სახარება“ ...',
      city: 'თბილისი',
      location: 'ავლაბარი',
      name: 'კარმირ ავეტარანი'
    },
    {
      id: 2,
      images: [
        'assets/moxaliseoba/ateshga/1.jpg',
        'assets/moxaliseoba/ateshga/2.jpg',
        'assets/moxaliseoba/ateshga/3.jpg',
        'assets/moxaliseoba/ateshga/4.jpg',
        'assets/moxaliseoba/ateshga/5.jpg',
        'assets/moxaliseoba/ateshga/6.jpg',
      ],
      text: 'ათეშგა — ცეცხლის საგზებელი. მდებარეობს ქალაქ თბილისში, კლდისუბანში ...',
      city: 'თბილისი',
      location: 'კლდისუბანი',
      name: 'ათეშგა – ცეცხლის ტაძარი'
    },
    {
      id: 3,
      images: [
        'assets/moxaliseoba/apolo/1.jpg',
        'assets/moxaliseoba/apolo/2.jpg',
        'assets/moxaliseoba/apolo/3.jpg',
        'assets/moxaliseoba/apolo/4.jpg',
        'assets/moxaliseoba/apolo/5.jpg',
      ],
      text: 'თბილისის კინოთეატრი „აპოლო“ წარმოადგენს საქართველოს დედაქალაქში აშენებულ ...',
      city: 'თბილისი',
      location: 'აღნიშნული',
      name: 'აპოლოს თეატრი'
    },
    {
      id: 4,
      images: [
        'assets/moxaliseoba/imeli/1.jpg',
        'assets/moxaliseoba/imeli/2.jpg',
        'assets/moxaliseoba/imeli/3.jpg',
        'assets/moxaliseoba/imeli/4.jpg',
      ],
      text: 'იმელის შენობა — ქალაქ თბილისში, რუსთაველის გამზირზე მდებარე 1938 წელს საბჭოთა არქიტექტორი ...',
      city: 'თბილისი',
      location: 'რუსთაველის გამზირი',
      name: 'იმელის შენობა'
    },
    {
      id: 5,
      images: [
        'assets/moxaliseoba/surb_gevorqi/1.jpg',
        'assets/moxaliseoba/surb_gevorqi/2.jpg',
        'assets/moxaliseoba/surb_gevorqi/3.jpg',
        'assets/moxaliseoba/surb_gevorqi/4.jpg',
      ],
      text: 'თბილისის სურბ გევორგის საკათედრო ტაძარი, სურფგევორქი (სომხ. Սուրբ Գեւորգ Եկեղեցի) — სომხური ეკლესია ...',
      city: 'თბილისი',
      location: 'ავლაბარი',
      name: 'სურბ გევორქი – ეკლესია'
    },
    {
      id: 6,
      images: [
        'assets/moxaliseoba/nariyalas_cixesimagre/1.jpg',
        'assets/moxaliseoba/nariyalas_cixesimagre/2.jpg',
        'assets/moxaliseoba/nariyalas_cixesimagre/3.jpg',
        'assets/moxaliseoba/nariyalas_cixesimagre/4.jpg',
        'assets/moxaliseoba/nariyalas_cixesimagre/5.jpg',
        'assets/moxaliseoba/nariyalas_cixesimagre/6.jpg',
        'assets/moxaliseoba/nariyalas_cixesimagre/7.jpg',
      ],
      text: 'ნარიყალას ციხე აღმართულია მთის ფერდობზე, მტკვრის მარჯვენა სანაპიროზე. ციხიდან იშლება ხედი ...',
      city: 'თბილისი',
      location: 'სოლოლაკი',
      name: 'ნარიყალას ციხესიმაგრე'
    },
    {
      id: 7,
      images: [
        'assets/moxaliseoba/cisfermaqmanebiani_saxli/1.jpg',
        'assets/moxaliseoba/cisfermaqmanebiani_saxli/2.jpg',
        'assets/moxaliseoba/cisfermaqmanebiani_saxli/3.jpg',
        'assets/moxaliseoba/cisfermaqmanebiani_saxli/4.jpg',
        'assets/moxaliseoba/cisfermaqmanebiani_saxli/5.jpg',
        'assets/moxaliseoba/cisfermaqmanebiani_saxli/6.jpg',
        'assets/moxaliseoba/cisfermaqmanebiani_saxli/7.jpg',
      ],
      text: 'თბილისის ერთ-ერთი გამორჩეული და სიმბოლური არქიტექტურული ძეგლია, რომელიც განთქმულია ...',
      city: 'თბილისი',
      location: 'ძველი თბილისი',
      name: 'ცისფერმაქმანებიანი სახლი'
    },
    {
      id: 8,
      images: [
        'assets/moxaliseoba/almasis_sasaxle/1.jpg',
        'assets/moxaliseoba/almasis_sasaxle/2.jpg',
        'assets/moxaliseoba/almasis_sasaxle/3.jpg',
        'assets/moxaliseoba/almasis_sasaxle/4.jpg',
        'assets/moxaliseoba/almasis_sasaxle/5.jpg',
        'assets/moxaliseoba/almasis_sasaxle/6.jpg',
      ],
      text: 'ერთ-ერთი ყველაზე იდუმალი და რომანტიზებული შენობაა ძველ თბილისში ...',
      city: 'თბილისი',
      location: 'ძველი თბილისი',
      name: 'ალმასის სასახლე'
    },
  ];
  
}