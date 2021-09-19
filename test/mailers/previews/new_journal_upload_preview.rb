class JournalUploadMailerPreview < ActionMailer::Preview
  
  def new_journal_upload
    upload = Upload.last
    JournalUploadMailer.new_upload(upload)
  end
end 
