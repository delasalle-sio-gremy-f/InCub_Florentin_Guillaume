import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Startup, Consultant} from './store';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const florentin = new Consultant(1, 'Gremey', 'Florentin', 'What a drag...');
    const david = new Consultant(2, 'Tofigh', 'David', 'Vikend Time !');
    const andreas = new Consultant(3, 'Adelson', 'Andréas', 'Rastafari man.');
    const damien = new Consultant(4, 'Milet', 'Damien', 'Who wants the big D ?');
    const guillaume = new Consultant(5, 'Francois', 'Guillaume', 'Trying to keep up');
    const startups = [
      new Startup(
        1,
        'Qweekle',
        'Hobbies',
        'Eric Bay',
        5,
        'Qweekle propose un logiciel de gestion destiné aux parcs de loisirs' +
        '(parcs de loisirs couverts pour enfants, paintball, accrobranche, escape game, base de loisirs…).',
        'hello@qweekle.com',
        florentin),
      new Startup(
        2,
        'INCE',
        'Agency',
        'Andriantavison',
        1,
        'INCE est une entreprise dynamique, experte dans le domaine de la' +
        'gestion de relation client omnicanal. Nous mettons à votre disposition une équipe qualifiée' +
        ' et force de proposition pour toute étude de projet.',
        '',
        damien),
      new Startup(
        3,
        'Cocoom',
        'Agency',
        'Anne-L Plessier',
        2,
        'Née en 2017, Cocoom fait vivre la culture d’entreprise et accompagne' +
        'la conduite du changement en facilitant le partage des informations clés grâce à une solution hybride.',
        'contact@cocoom.com',
        david),
      new Startup(
        4,
        'Libizi',
        'Health',
        'Tibo Lemaire',
        1,
        'Destinée aux professionnels de la santé souhaitant devenir ‘libéral’, ' +
        'cette startup accompagne l’installation du cabinet / local.',
        'contact@libizi.fr',
        florentin),
      new Startup(5,
        'Mileswap',
        'Automobile',
        'Mignani Chris',
        3,
        'Mileswap est la plateforme qui démocratise l\'échange de ' +
        'voiture et vous aide à faire des économies lors de vos voyages.',
        'hello@mileswap.com',
        andreas)
    ];
    const consultants = [florentin, david, andreas, damien, guillaume];
    return {startups, consultants};
  }

  genId<T extends Startup | Consultant>(table: T[]): number {
    return table.length > 0 ? Math.max(...table.map(t => t.id)) + 1 : 11;
  }
  constructor() {
  }
}
