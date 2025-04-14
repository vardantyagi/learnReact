import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
  client = new Client();
  databases;
  buckets; // storage
  constructor(){
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
      this.databases = new Databases(this.client);
      this.buckets = new Storage(this.client);
  }
  async createPost({title,slug,content,featuredImage,status,userId}){
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      )
    } catch (error) {
      console.log('Appwrite service :: createPost :: error');
      throw error
    }
  }
  async updatePost(slug,{title,content,featuredImage,status}){
    try {
      return this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      )
    } catch (error) {
      console.log('Appwrite service :: updatePost :: error');
    }
  }
  async detetePost(slug){
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
      )
      return true
    } catch (error) {
      console.log('Appwrite service :: deletePost :: error');
      return false
    }
  }
  async getPost(slug){
    try {
      await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
      )
      return true
    } catch (error) {
      console.log('Appwrite service :: getPost :: error');
      return false
    }
  }
  async getPosts(queries = [Query.equal('status','active')]){
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries,
      )
    } catch (error) {
      console.log('Appwrite service :: getPosts :: error');
      return false
    }
  }
  // file upload service
  async uploadFile(file){
    try {
      return await this.buckets.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file,
      )
    } catch (error) {
      console.log('Appwrite service :: uploadFile :: error');
      return false
    }
  }
  async deleteFile(fileId){
    try {
      await this.buckets.deleteFile(
        conf.appwriteBucketId,
        fileId
      )
    } catch (error) {
      console.log('Appwrite service :: uploadFile :: error');
      return false
    }
  }
  getFilePreview(fileId){
    return this.buckets.getFilePreview(
      conf.appwriteBucketId,
      fileId
    )
  }
}
const service = new Service()
export default service