import { MARVEL_PUBLIC_KEY, MarvelBaseRepository, md5Hash } from '../MarvelBaseRepository';

export default class HeroListRepository<T> extends MarvelBaseRepository {
  async getData({
    limit = 50,
    nameStartsWith = '',
  }: {
    limit: number,
    nameStartsWith?: string,
  }) {
    const publicKey = MARVEL_PUBLIC_KEY;
    const privateKey = process.env.MARVEL_PRIVATE_KEY ? process.env.MARVEL_PRIVATE_KEY : '';
    const timeStamp = 1;

    const encryptedKey = md5Hash(timeStamp + privateKey + publicKey);

    if(nameStartsWith) {
      return await this.get<T>(`characters?limit=${limit}${nameStartsWith ? `&nameStartsWith=${nameStartsWith}` : ''}&apikey=${publicKey}`);
    }

    return await this.get<T>(`characters?limit=${limit}&ts=${timeStamp}&apikey=${publicKey}&hash=${encryptedKey}`);
  }
}
