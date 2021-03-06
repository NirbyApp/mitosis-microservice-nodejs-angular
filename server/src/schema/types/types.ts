export const typeDefs = `

enum CellType {
  EUCARYOTE
  PROCARYOTE
}

type Cell {
   id: ID
   type: CellType
   name: String
   color: String
   size: Int 
}

type Subscription {
  newCell: Cell
}

# the schema allows the following query:
type Query {
  cellsByType(type: CellType): [Cell]
  cells: [Cell]
}

# we need to tell the server which types represent the root query
# and root mutation types. We call them RootQuery and RootMutation by convention.
schema {
  query: Query
  subscription: Subscription
}
`