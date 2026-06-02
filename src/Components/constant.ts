 export const categories = [ 'Grocery', 'Utilities', 'Entertainment', 'Transportation', 'Healthcare', 'Education', 'Personal Care' ] as const ;

export type category = typeof categories[number];