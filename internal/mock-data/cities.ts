export const cityGroups: Array<{
  label?: string;
  cities: Array<{ value: string; label: string; disabled?: boolean }>;
}> = [
  {
    label: 'Big Cities',
    cities: [
      { value: 'jakarta', label: 'Jakarta' },
      { value: 'surabaya', label: 'Surabaya' },
      { value: 'bandung', label: 'Bandung' },
      { value: 'medan', label: 'Medan' },
      { value: 'bekasi', label: 'Bekasi' },
    ],
  },
  {
    label: 'Central Java Cities',
    cities: [
      { value: 'semarang', label: 'Semarang' },
      { value: 'depok', label: 'Depok' },
      { value: 'tangerang', label: 'Tangerang' },
      { value: 'palembang', label: 'Palembang', disabled: true },
      { value: 'makassar', label: 'Makassar' },
    ],
  },
  {
    label: 'Traditional Cities',
    cities: [
      { value: 'yogyakarta', label: 'Yogyakarta' },
      { value: 'balikpapan', label: 'Balikpapan' },
      { value: 'banda-aceh', label: 'Banda Aceh' },
      { value: 'batam', label: 'Batam' },
      { value: 'banjarmasin', label: 'Banjarmasin' },
    ],
  },
  {
    cities: [
      { value: 'ambon', label: 'Ambon' },
      { value: 'pontianak', label: 'Pontianak' },
    ],
  },
];
