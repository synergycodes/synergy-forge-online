import { gql } from '@apollo/client'

export const COUNTRY_MEDALS_QUERY = gql`
    query {
        countries {
            id
            name
            summerMedals {
                gold
                silver
                bronze
                total
            }
            winterMedals {
                gold
                silver
                bronze
                total
            }
        }
    }
`
