export interface StaffMember {
  id: number
  name: string
  position: string
  photo: string
}

export const staff: StaffMember[] = [
  {
    id: 1,
    name: 'Full Name',
    position: 'Principal',
    photo: '/src/assets/staff1.jpg',
  },
]