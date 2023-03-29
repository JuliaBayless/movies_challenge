 export interface Movie {
        imdbID: string;
        Title: string,
        Year: string,
        Runtime: string,
        Ratings: RatingItem[]
        
      };

export interface RatingItem {
    Source: string,
    Value: string
}
