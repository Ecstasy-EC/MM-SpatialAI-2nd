// =============================================================================
// Workshop content. Edit this file to update the website; index.html and
// main.js normally do not need to change.
//
// Images: put photos in assets/images/speakers/ or assets/images/organizers/
// (square-ish crops work best). If a photo is missing, the page shows the
// person's initials instead, so the site works before photos are collected.
// =============================================================================

const workshop = {
  short_name: 'MM-SpatialAI 2027',
  title: 'Multi-Modal Spatial AI for Open-World Understanding, Reasoning, and Action',
  edition: '2nd Workshop',
  conference: 'ICRA 2027',
  conference_url: 'https://2027.ieee-icra.org/',
  location: 'Seoul, Korea',
  date: 'Monday, May 24, 2027 (TBC)',
  time: 'Morning, 08:30 – 12:30',
  room: 'Room TBA',
  format: 'Half-Day Workshop',
  conference_logo: 'assets/images/icra2027_logo.png',   // optional; hidden if missing
  submission_url: '',          // OpenReview link once the venue is open
  online_url: '',              // video-call link for the day of the workshop
  contact_email: 'yixica@kth.se',
  previous_edition_url: 'https://xingxingzuo.github.io/MM-SpatialAI/',
}

// Shown as a banner at the top of the page; set to '' to hide.
const announcement = 'The website is under construction. Call for papers and the Hilti Challenge will open in early 2027.'

const overview = [
  `Multi-modal sensing (cameras, LiDAR, IMU, radar, thermal, and more) has long been the backbone of robust
   SLAM and state estimation. Recent progress in 3D/4D representations, open-vocabulary perception, and
   spatial foundation models means that robots are now expected to <em>understand and reason</em> about
   unseen, changing environments, not only to localize in them. Yet it remains unclear how the complementary
   information of different sensors should be represented, aligned, and used beyond geometry.`,
  `This workshop connects the state-estimation community with emerging spatial-AI research around one guiding
   question: <strong>how do complementary sensing modalities improve open-world spatial understanding and
   reasoning, beyond more accurate poses and maps?</strong> We ground the discussion in three robotics
   settings and a set of guiding questions that the talks, contributed papers, the Hilti Challenge, and the
   closing panel all return to.`,
]

// [id, title, description, Font Awesome icon]
const cases = [
  ['C1', 'Construction & built environments', 'Multi-sensor mapping and as-built understanding on real construction sites, benchmarked through the Hilti Challenge.', 'fa-helmet-safety'],
  ['C2', 'Field & legged robots in degraded conditions', 'Darkness, dust, smoke, and aggressive motion, where single modalities fail and fusion must carry understanding.', 'fa-person-hiking'],
  ['C3', 'Open-world mobile manipulation & object search', 'Finding and acting on objects in changing, human-shared environments using open-vocabulary 3D/4D maps.', 'fa-robot'],
]

// [id, short title, question]
const questions = [
  ['Q1', 'Modality value', 'When does an extra modality improve downstream understanding, not only trajectory accuracy?'],
  ['Q2', 'Representation', 'Factor graphs, scene graphs, neural/Gaussian fields, or foundation-model features: what is the right interface between estimation and reasoning?'],
  ['Q3', 'Learned vs. model-based', 'Where should feed-forward 3D foundation models replace, initialize, or be constrained by classical estimation?'],
  ['Q4', 'Evaluation', 'Which task-level metrics beyond pose error capture spatial understanding?'],
]

// key: [name, photo, position, affiliation, homepage, talk title, abstract, bio, remote?]
const speakers = {
  zhang: ['Fu Zhang', 'assets/images/speakers/zhang.jpg', 'Associate Professor', 'The University of Hong Kong',
    'https://mars.hku.hk/', '', '', '', false],
  huang: ['Guoquan (Paul) Huang', 'assets/images/speakers/huang.jpg', 'Professor', 'University of Delaware, USA',
    'https://udel.edu/~ghuang/', '', '', '', false],
  bauer: ['Zuria Bauer', 'assets/images/speakers/bauer.jpg', 'Postdoctoral Researcher', 'ETH Zurich, Switzerland',
    'https://zuriabauer.com/', '', '', '', false],
  dellaert: ['Frank Dellaert', 'assets/images/speakers/dellaert.jpg', 'Professor', 'Georgia Tech, USA',
    'https://dellaert.github.io/', '', '', '', false],
  fallon: ['Maurice Fallon', 'assets/images/speakers/fallon.jpg', 'Associate Professor', 'University of Oxford, UK',
    'https://ori.ox.ac.uk/people/maurice-fallon/', '', '', '', false],
}

// [name, photo, position, affiliation, homepage]
const organizers = [
  ['Yixi Cai', 'assets/images/organizers/cai.jpg', 'Postdoctoral Researcher', 'KTH Royal Institute of Technology, Sweden', 'https://yixicai.com/'],
  ['Yifu Tao', 'assets/images/organizers/tao.jpg', 'Assistant Professor', 'The Hong Kong Polytechnic University', 'https://yifutao.github.io/'],
  ['Xingxing Zuo', 'assets/images/organizers/zuo.jpg', 'Assistant Professor', 'MBZUAI, UAE', 'https://xingxingzuo.github.io/'],
  ['Marija Popović', 'assets/images/organizers/popovic.jpg', 'Assistant Professor', 'TU Delft, the Netherlands', 'https://www.tudelft.nl/en/staff/m.popovic/'],
  ['Lukas Rosenberger Schmid', 'assets/images/organizers/schmid.jpg', 'Professor', 'University of Technology Nuremberg, Germany', 'https://schmluk.github.io/'],
  ['Teresa Vidal-Calleja', 'assets/images/organizers/vidal-calleja.jpg', 'Professor', 'University of Technology Sydney, Australia', 'https://profiles.uts.edu.au/Teresa.VidalCalleja'],
]

// Schedule rows: [type, time, title, extra]
//   type: 'intro' | 'talk' | 'challenge' | 'spotlight' | 'break' | 'panel' | 'award'
//   for 'talk', extra is the speaker key above; otherwise extra is an optional note.
const schedule = [
  ['intro', '08:30 – 08:35', 'Opening remarks and Slido introduction', ''],
  ['talk', '08:35 – 09:00', 'Invited Talk 1', 'zhang'],
  ['talk', '09:00 – 09:25', 'Invited Talk 2', 'huang'],
  ['talk', '09:25 – 09:50', 'Invited Talk 3', 'bauer'],
  ['spotlight', '09:50 – 10:05', 'Paper spotlights (4–5 selected papers)', ''],
  ['break', '10:05 – 10:35', 'Coffee break & poster session', 'Accepted papers, challenge teams, and sponsor booths'],
  ['sponsor', '10:35 – 10:45', 'Brief talks by industry sponsors (2 × 5 min)', ''],
  ['talk', '10:45 – 11:10', 'Invited Talk 4', 'dellaert'],
  ['talk', '11:10 – 11:35', 'Invited Talk 5', 'fallon'],
  ['challenge', '11:35 – 11:55', 'Hilti Challenge session: overview, results, and winner talks', ''],
  ['panel', '11:55 – 12:25', 'Interactive panel discussion with on-site speakers', 'Audience questions via Slido'],
  ['award', '12:25 – 12:30', 'Best Paper Award, Hilti Challenge awards & closing', ''],
]

const call_for_papers = {
  intro: `We invite researchers and practitioners from robotics, computer vision, and AI to submit work that
    connects multi-modal sensing and state estimation with spatial understanding, reasoning, and action.
    Preliminary results, field reports, and industry experience are all welcome.`,
  formats: [
    'Research papers: up to 4 pages + references',
    'Position / field-report papers: 2 pages + references',
    'IEEE RAS conference template, double-blind review, non-archival',
  ],
  topics: [
    'Multi-modal fusion for scene understanding',
    'Sensing-aware 3D/4D representations',
    'Open-vocabulary and semantic mapping',
    'Scene graphs and spatial reasoning',
    'Foundation models for spatial AI',
    'Learned vs. model-based estimation',
    'Robust perception in degraded conditions',
    'Mobile manipulation and object search',
    'Task-level evaluation and benchmarks',
    'Datasets and field deployments',
  ],
  award: 'A <strong>Best Paper Award</strong> is selected from the 4–5 spotlight papers by organizers and invited speakers without conflicts.',
}

// [label, date]
const important_dates = [
  ['Call for papers & challenge open', 'February 2027 (TBA)'],
  ['Paper submission deadline', 'March 31, 2027 (TBA)'],
  ['Notification of acceptance', 'April 21, 2027 (TBA)'],
  ['Camera-ready deadline', 'May 7, 2027 (TBA)'],
  ['Workshop', 'Monday, May 24, 2027 (TBC)'],
]

const challenge = {
  text: `The <strong>Hilti Challenge</strong> provides a shared, measurable benchmark for the construction setting: multi-sensor
    SLAM and spatial understanding on real construction sites. Results are announced at the workshop, and the
    top teams present short talks and posters. The challenge and its prizes are run by Hilti, independently of
    the paper track.`,
  url: '',   // challenge page, once available
  note: 'Dataset, tasks, and timeline will be announced soon.',
}

// [name, logo, url]; leave empty to hide the section.
const sponsors = []

const previous_editions = [
  ['1st MM-SpatialAI Workshop, ICRA 2026, Vienna, Austria', 'https://xingxingzuo.github.io/MM-SpatialAI/'],
]
