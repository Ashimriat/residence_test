import { EIcons } from '~/components/base';
import type { AccordionContent } from '~/components/base/BaseAccordion.vue';

type AuthItem = {
  label: string;
  url: string;
  icon: EIcons;
}

const CONTENT_IDS = {
  pages: crypto.randomUUID(),
};
const ACCORDION_CONTENT: AccordionContent[] = [
  {
    header: 'Страницы',
    id: CONTENT_IDS.pages,
  }
]
const AUTHED_ITEMS: AuthItem[][] = [
  [
    {
      label: 'Панель событий',
      url: '/events',
      icon: EIcons.GRID,
    },
  ],
  [
    {
      label: 'Рейтинг ведущих',
      url: '/rating/masters',
      icon: EIcons.ZAP,
    },
    {
      label: 'Рейтинг',
      url: '/rating',
      icon: EIcons.HASH,
    },
  ],
  [
    {
      label: 'Достижения',
      url: '/account?tab=achievements',
      icon: EIcons.AWARD,
    },

    {
      label: 'Кланы',
      url: '/account?tab=clans',
      icon: EIcons.SHIELD,
    },
    {
      label: 'Игроки',
      url: '/account?tab=referrals',
      icon: EIcons.USERS,
    },
  ],
  [
    {
      label: 'Настройки',
      url: '/account/settings',
      icon: EIcons.GEAR,
    }
  ]
] as const;


export {
  CONTENT_IDS,
  ACCORDION_CONTENT,
  AUTHED_ITEMS,
};
