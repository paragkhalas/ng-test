import { PageInfo } from "./pageinfo";
import { Episode } from "./episode";

export class EpisodeResponse {
    info: PageInfo;
    results: Episode[];
}