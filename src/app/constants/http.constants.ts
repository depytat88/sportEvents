export class HttpConstants {
  static readonly URL = {
    FOOTBALL: {
      NEXT_5_CLUB_GAMES: (id: string): string => "https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=" + id,
      MANUTD: {
        CLUB_ID: "133612",
        ABBREVIATION: "Man United"
      }
    },
  }
}
