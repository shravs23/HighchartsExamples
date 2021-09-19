require 'test-helper'

class JournalUploadMailerTest < ActionMailer::TestCase
  test "new_journal_upload" do
    mail = JournalUploadMailer.new_upload
    assert_equal "New Upload", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end
end 
