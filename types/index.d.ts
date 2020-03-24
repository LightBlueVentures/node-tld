export interface ParsedDomain {
    tld: string;
    domain: string;
    sub: string;
}
export function parse_host(host:string): ParsedDomain;
export default function(remote_url:string): ParsedDomain;