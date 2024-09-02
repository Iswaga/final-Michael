type  UserResponse  = {
    count: number
    data: User[]
  }

type  User =  {
    id: string
    firstName: string
    lastName: string
    fiscalCode: string
    dateOfBirth: string
    address: string
    houseNumber: string
    fixedPhone: string
    mobilePhone: string
    city: string
    email: string
    createdAt: string
    updatedAt: string
  }
