// ============================================================================
//  PROFIL DE L'ÉTABLISSEMENT
//  C'est le fichier à adapter pour décliner le site pour une autre école :
//  identité, coordonnées, tarifs par défaut, textes de l'accueil, cycles, FAQ…
//  Les images référencées se trouvent dans le dossier public/.
//
//  En mode API, les coordonnées et les tarifs (bloc `settings`) sont ensuite
//  remplacés par ceux enregistrés dans l'administration (GET /api/public/settings).
// ============================================================================
import type { Settings } from '../models'

export interface CycleProfile {
  /** Nom du cycle. Doit correspondre aux cycles acceptés par le backend (utils/schemas.js). */
  name: string
  /** Segment d'URL de la page d'admission : /admissions/<slug>. */
  slug: string
  age: string
  text: string
  /** Classes proposées. Doivent correspondre aux classes acceptées par le backend. */
  classes: string[]
  skills: string[]
  programs: { icon: string; title: string; text: string }[]
}

export interface SchoolProfile {
  /** Identifiant technique (sert aussi de clé de stockage des fake data). */
  id: string
  logo: string
  /** Valeurs par défaut des paramètres (affichées avant chargement et utilisées par les fake data). */
  settings: Settings
  footerText: string
  hero: { eyebrow: string; titleLines: string[]; highlight: string; intro: string; images: string[] }
  founder: {
    photo: string
    photoAlt: string
    eyebrow: string
    titleLines: string[]
    greeting: string
    paragraphs: string[]
    signature: string
  }
  history: { title: string; paragraphs: string[]; stats: { value: string; label: string }[] }
  values: { icon: string; title: string; text: string }[]
  faq: { q: string; a: string; link?: { to: string; label: string } }[]
  cycles: CycleProfile[]
  admissions: { documents: string[] }
}

export const school: SchoolProfile = {
  id: 'cs-les-leaders-dapaong',
  logo: '/logo-cs-les-leaders.png',
  settings: {
    name: 'CS LES LEADERS',
    shortName: 'CS LES LEADERS',
    slogan: 'FORMER LES LEADERS DE DEMAIN',
    address: 'Quartier Boumonga, près du carrefour Tingban Gabong (RN1) — Dapaong, Togo',
    email: 'contact@cs-lesleaders.tg',
    phone: '+228 90 19 62 58',
    phone2: '+228 99 46 19 35',
    hours: 'Lundi – Vendredi : 7h00 – 17h00',
    annualFee: 75000,
    canteenFee: 400,
    badgeFee: 1000,
    uniformFee: 3500,
    apeFee: 2000,
  },
  footerText:
    'Un complexe scolaire privé à Dapaong qui forme les leaders de demain, de l’enseignement général aux filières techniques.',
  hero: {
    eyebrow: 'SAVOIR - SAVOIR-FAIRE - RÉUSSITE',
    titleLines: ['Complexe', 'Scolaire'],
    highlight: 'LES LEADERS',
    intro:
      'Bienvenue sur le site officiel du Complexe Scolaire LES LEADERS, au quartier Boumonga à Dapaong : un établissement privé qui prépare les jeunes à réussir, de l’enseignement général aux filières techniques et professionnelles.',
    images: ['/hero/hero-1.jpg', '/hero/hero-2.jpg', '/hero/hero-3.jpg'],
  },
  founder: {
    photo: '/directeur-general.jpg',
    photoAlt: 'Le fondateur du Complexe Scolaire LES LEADERS',
    eyebrow: 'UN MOT DU FONDATEUR',
    titleLines: ['Former aujourd’hui', 'les leaders de demain.'],
    greeting: 'Chers parents, chers élèves,',
    paragraphs: [
      'Au Complexe Scolaire LES LEADERS, nous croyons que chaque jeune peut devenir un acteur du développement de sa région. Notre ambition est de lui donner à la fois des connaissances solides et un véritable savoir-faire.',
      'Notre équipe éducative accompagne les élèves avec exigence et attention, en lien étroit avec les familles de Boumonga et de toute la ville de Dapaong, pour qu’ils réussissent leurs examens et construisent un avenir dont ils seront fiers.',
    ],
    signature: 'BONSA Yempabe — Fondateur',
  },
  history: {
    title: 'Notre Histoire',
    paragraphs: [
      'Le Complexe Scolaire LES LEADERS est un établissement d’enseignement privé de référence, implanté dans le quartier Boumonga, non loin du carrefour Tingban Gabong, le long de la Route Nationale N°1 à Dapaong, dans la région des Savanes.',
      'En plus de l’enseignement général, du collège jusqu’au lycée, l’établissement s’est modernisé en ouvrant des filières d’enseignement technique et professionnel : le BT (Brevet de Technicien) en Électrotechnique (F3) et en Génie Civil (F4), ainsi que des formations pratiques de courte durée en chaudronnerie, maçonnerie et électricité d’équipement.',
      'Pour accompagner ses élèves, le Complexe Scolaire LES LEADERS dispose de salles de classe spacieuses, d’ateliers pratiques équipés pour les filières techniques, d’une bibliothèque et d’une salle d’étude.',
    ],
    stats: [
      { value: 'Un suivi attentif', label: 'Chaque élève est suivi avec attention.' },
      { value: 'Un cadre sûr', label: 'Pour apprendre dans de bonnes conditions.' },
      { value: 'Pour bien réussir', label: 'Notre engagement pour chaque enfant.' },
    ],
  },
  values: [
    { icon: 'graduation', title: 'Excellence académique', text: 'Des enseignements exigeants et une préparation sérieuse aux examens.' },
    { icon: 'idea', title: 'Savoir-faire', text: 'Des ateliers équipés pour apprendre un métier par la pratique.' },
    { icon: 'heart', title: 'Leadership', text: 'Former des jeunes responsables, confiants et engagés.' },
    { icon: 'users', title: 'Communauté', text: 'Une communauté éducative unie avec les familles de Dapaong.' },
  ],
  faq: [
    {
      q: 'Quelles formations propose l’établissement ?',
      a: 'L’enseignement général, du collège jusqu’au lycée, et des filières techniques : BT en Électrotechnique (F3) et en Génie Civil (F4). Des formations pratiques de courte durée sont aussi proposées (chaudronnerie, maçonnerie, électricité d’équipement).',
    },
    {
      q: 'Avez-vous un bus scolaire ?',
      a: 'Contactez le secrétariat pour connaître les possibilités de transport et les quartiers de Dapaong desservis.',
    },
    {
      q: 'Les frais de scolarité au Complexe Scolaire LES LEADERS s’élèvent à combien ?',
      a: 'La scolarité annuelle et les frais annexes sont détaillés sur la page Tarifs et scolarité.',
      link: { to: '/tarifs', label: 'Voir les tarifs' },
    },
    {
      q: 'Quelles sont les échéances de paiement ?',
      a: 'Le paiement de la scolarité peut être effectué en trois tranches. Le calendrier est communiqué lors de l’inscription.',
    },
    {
      q: 'Vous semblez avoir un programme bien défini que vous leur léguez ?',
      a: 'Nos programmes conjuguent apprentissages fondamentaux, développement personnel et ouverture sur le monde. Découvrez le détail dans la rubrique Nos cycles.',
      link: { to: '/cycles', label: 'Voir nos cycles' },
    },
  ],
  cycles: [
    {
      name: 'Collège',
      slug: 'college',
      age: '12 à 16 ans',
      text: 'Le collège prépare les élèves à poursuivre leurs études avec confiance. Les enseignements approfondissent les connaissances, les méthodes de travail et l’esprit critique.',
      classes: ['6e', '5e', '4e', '3e'],
      skills: [
        'Enseignements généraux approfondis',
        'Méthodologie et autonomie',
        'Accompagnement et suivi des progrès',
        'Préparation aux examens et à l’orientation',
      ],
      programs: [
        {
          icon: 'graduation',
          title: 'Excellence académique',
          text: 'Des enseignements exigeants et un suivi régulier.',
        },
        {
          icon: 'book',
          title: 'Langues et culture',
          text: 'S’exprimer et s’ouvrir à de nouveaux horizons.',
        },
        {
          icon: 'shield',
          title: 'Préparer l’avenir',
          text: 'Construire son projet et développer ses compétences.',
        },
      ],
    },
  ],
  admissions: {
    documents: [
      'Une (1) copie légalisée de l’acte de naissance ou un jugement supplétif légalisé (dossier scolaire pour tout le cycle)',
      'Un (1) certificat de scolarité',
      'Les bulletins de notes de l’année écoulée (et le CEPD pour l’entrée en 6e)',
      'Un carnet de correspondance (pour la réinscription)',
      'Une (1) chemise dossier à rabat',
      'Un (1) carnet de santé',
    ],
  },
}

/** Classes par cycle, dérivées du profil (formulaires, filtres, fake data). */
export const classesByCycle: Record<string, string[]> = Object.fromEntries(
  school.cycles.map((c) => [c.name, c.classes]),
)
